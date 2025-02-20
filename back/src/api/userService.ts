// import client from '../config/db';

// export const createUserService = async (username: string, email: string, password: string) => {
//   const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
//   const values = [username, email, password];

//   try {
//     const res = await client.query(query, values);
//     return res.rows[0];
//   } catch (err) {
//     throw new Error('Error creating user: ' + err.message);
//   }
// };

// export const getAllUsersService = async () => {
//   const query = 'SELECT id, username, email FROM user_entity';

//   try {
//     const res = await client.query(query);
//     return res.rows;
//   } catch (err) {
//     throw new Error('Error fetching users: ' + err.message);
//   }
// };

// export const getUserByIdService = async (userId: string) => {
//   const query = 'SELECT id, username, email FROM users WHERE id = $1';
//   const values = [userId];

//   try {
//     const res = await client.query(query, values);
//     return res.rows[0] || null;
//   } catch (err) {
//     throw new Error('Error fetching user: ' + err.message);
//   }
// };

