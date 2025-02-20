import {todolistDB} from "../config/todolist_db";
import { Repository } from "typeorm";
import { Notification } from "../types/notifications";

export const NotificationRepository: Repository<Notification> = todolistDB.getRepository(Notification);

export const createNotification = async (senderId, receiverId = null, type = 'poke') => {
  try {
    const notification = new Notification();
    notification.senderId = senderId;
    notification.receiverId = receiverId || 'defaultReceiver';
    notification.isRead = false;

    const savedNotification = await NotificationRepository.save(notification);
    return savedNotification;
  } catch (error) {
    console.error("Error saving notification:", error);
    throw error;
  }
};
