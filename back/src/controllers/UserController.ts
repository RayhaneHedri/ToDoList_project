import { Request, Response } from "express";
import { UserService } from "../services/UserService";

const userService = new UserService();

export const syncUsersHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await userService.syncUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "User sync failed" });
  }
};

export const addUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const newUser = await userService.addUser({ username, email, password });
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    console.error("Error in addUserHandler:", error);
    res.status(500).json({ message: "Failed to create user", error: error.message });
  }
};
