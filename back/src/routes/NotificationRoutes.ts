import { Router } from "express";
import { NotificationController } from "../controllers/NotificationController";

const router = Router();

const asyncHandler = (fn: Function) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post("/", asyncHandler(NotificationController.create));
router.get("/", asyncHandler(NotificationController.getAll));
router.patch("/:id/read", asyncHandler(NotificationController.markAsRead));

export default router;
