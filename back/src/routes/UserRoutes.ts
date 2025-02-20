import express from 'express';
import { UserService } from '../services/UserService';

const router = express.Router();
const userService = new UserService();


router.post('/sync-users', async (req, res) => {
  try {
    const result = await userService.syncUsers();
    res.status(200).json({ message: 'User sync complete', result });
  } catch (error) {
    console.error('Error syncing users:', error);
    res.status(500).json({ message: 'User sync failed', error: error.message });
  }
});

router.get('/test', (req, res) => {
    res.status(200).send("Test route works");
  });
  

export default router;
