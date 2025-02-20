import { UserService } from "../services/UserService";
const userService = new UserService();

export const syncUsersHandler = async (req, res) => {
  try {
    const result = await userService.syncUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "User sync failed" });
  }
};
