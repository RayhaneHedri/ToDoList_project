import express from "express";
import { syncUsersHandler, addUserHandler } from "../controllers/UserController";
import { authMiddleware, checkAdmin } from "../middleware/auth";

const router = express.Router();


router.post("/sync-users", authMiddleware, syncUsersHandler);

router.post("/add-user", authMiddleware, checkAdmin, addUserHandler);

router.get("/test", (req, res) => {
  res.status(200).send("Test route works");
});

export default router;
