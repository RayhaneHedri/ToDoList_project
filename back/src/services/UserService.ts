import keycloakClient from "../config/db"; 
import { createUser } from "../repositories/UserRepository";

export class UserService {

/////sync databases
  async syncUsers() {
    try {
        const res = await keycloakClient.query(
            "SELECT id, username, email FROM user_entity WHERE email IS NOT NULL"
          );
          console.log("Query Result:", res);
          
      const users = res.rows;
      console.log(`Found ${users.length} users in Keycloak DB`);

      for (const userData of users) {
        await createUser(
          userData.id,
          userData.username,
          userData.email,
        );
        console.log(`User ${userData.id} synced`);
      }
      return { message: "User sync complete." };
    } catch (error) {
      console.error("Error syncing users:", error);
      throw error;
    }
  }

  ////add user
  async addUser({ username, email, password }) {
    try {
      ///insert user in keycloak database
      const insertQuery = `
        INSERT INTO user_entity (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING id
      `;
      const result = await keycloakClient.query(insertQuery, [username, email, password]);
      
      if (!result.rows || result.rows.length === 0) {
        throw new Error("Failed to create user in Keycloak");
      }
      
      const newUserId = result.rows[0].id;
      console.log(`User created in Keycloak with id ${newUserId}`);

      ////insert user in todolist database
      const savedUser = await createUser(newUserId, username, email);
      console.log(`User created in todolist DB with id ${savedUser.id}`);
      
      return savedUser;
    } catch (error) {
      console.error("Error in addUser:", error);
      throw error;
    }
  }
  
}
