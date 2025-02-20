import { Request, Response } from "express";
import { NotificationService } from "../services/NotificationService";

export class NotificationController {
  static async create(req: Request, res: Response) {
    try {
      const { senderId, receiverId } = req.body;
      const notification = await NotificationService.create(senderId, receiverId);
      return res.status(201).json(notification);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const notifications = await NotificationService.getAll();
      return res.json(notifications);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async markAsRead(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await NotificationService.markAsRead(parseInt(id, 10));
      return res.json({ message: "Notification marked as read" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
