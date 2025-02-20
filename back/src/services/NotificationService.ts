import { AppDataSource } from "../config/typeorm";
import { Notification } from "../types/notifications";



export class NotificationService {
  static async create(senderId: string, receiverId: string) {
    const repo = AppDataSource.getRepository(Notification);
    const notification = repo.create({ senderId, receiverId });
    return repo.save(notification);
  }

  static async getAll() {
    const repo = AppDataSource.getRepository(Notification);
    return repo.find();
  }

  static async markAsRead(id: number) {
    const repo = AppDataSource.getRepository(Notification);
    await repo.update(id, { isRead: true });
  }
  static async getByReceiverId(receiverId: string) {
    const repo = AppDataSource.getRepository(Notification);
    return repo.find({ where: { receiverId } });
  }
}
