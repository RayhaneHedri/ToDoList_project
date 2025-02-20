// import { Request, Response } from 'express';
// import { createUserService, getAllUsersService, getUserByIdService } from './userService';

// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { username, email, password } = req.body;
//     const newUser = await createUserService(username, email, password);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error });
//   }
// };

// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await getAllUsersService();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users', error });
//   }
// };

// // export const getLoggedInUser = async (req: Request, res: Response) => {
// //   try {
// //     const userId = req.kauth?.grant?.access_token?.content?.sub;

// //     if (!userId) {
// //       return res.status(401).json({ message: 'Unauthorized: No user ID found' });
// //     }

// //     const user = await getUserByIdService(userId);
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     res.status(200).json(user);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching user', error });
// //   }
// // };