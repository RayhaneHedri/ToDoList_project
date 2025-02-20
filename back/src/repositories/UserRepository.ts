import {todolistDB} from "../config/todolist_db";
import { Repository } from "typeorm";
import { User } from "../types/user";

export const UserRepository: Repository<User> = todolistDB.getRepository(User);

export const createUser = async (id, username, email) => {
    try {
      const existingUser = await UserRepository.findOne({ where: { id } });
  
      if (existingUser) {
        console.log(`User ${id} already exists, skipping...`);
        return existingUser; 
      }

      const user = new User();
      user.id = id;
      user.username = username;
      user.email = email;
  
      const savedUser = await UserRepository.save(user).catch((error) => {
        console.error("Error saving user:", error);
        throw error;
      });
      
      console.log(`User ${id} created successfully`);
      return savedUser;
    } catch (error) {
      console.error("Error saving User:", error);
      throw error;
    }
  };
  