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
}
