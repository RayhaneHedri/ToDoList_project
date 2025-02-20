import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';
import notificationRoutes from './routes/NotificationRoutes';
import dotenv from 'dotenv';
import { keycloak, memoryStore } from './config/keycloak'; 
import cors from 'cors';
import session from 'express-session';
import http from "http";
import {Server} from "socket.io";
import { createNotification } from './repositories/NotificationRepository';
import jwt from "jsonwebtoken";


dotenv.config();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
})

app.use(session({
  secret: 'secretsession', 
  resave: false,
  saveUninitialized: true,
  store: memoryStore, 
}));

app.use(bodyParser.json());

app.use(keycloak.middleware());

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

//app.use('/api', userRoutes);
app.use('/notifications', notificationRoutes);
app.use('/user', userRoutes);




io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error("No token provided"));
  }

  try {
    const decodedToken = jwt.decode(token);
    if (!decodedToken || !decodedToken.sub) {
      return next(new Error("Invalid token or missing user ID"));
    }
    socket.data.userId = decodedToken.sub;
    console.log("User ID decoded from token:", socket.data.userId);
    next();
  } catch (error) {
    console.error("Error decoding token:", error);
    next(new Error("Token verification failed"));
  }
});


const connectedUsers = {};

//////socket connection
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id, "User ID:", socket.data.userId);
  connectedUsers[socket.data.userId] = socket.id;

  io.emit("update_users", Object.keys(connectedUsers).map(userId => ({
    userId,
    username: userId,
  })));

  
  socket.on("pokeOne", async ({receiverId }) => {
    const senderId = socket.data.userId;
    // if (!senderId || !receiverId) {
    //   return console.error("Sender or Receiver ID is missing.");
    // }
  
    try { 
      const notification = await createNotification(senderId, receiverId, 'poke');
      console.log("Notification saved:", notification);
  
     
      io.to(connectedUsers[receiverId]).emit("poke_received", { senderId, receiverId });
  
    } catch (error) {
      console.error("Error saving notification:", error);
    }
  });
  
  
  socket.on("poke", async () => {
    const senderId = socket.data.userId;  
    const receiverId = socket.data.receiverId;
  
    if (!senderId) {
      return console.error("No sender ID found.");
    }
  
    try {
      
      const notification = await createNotification(senderId, receiverId, 'poke');
      console.log("Notification saved:", notification);
  
      
      socket.broadcast.emit("poke_received", senderId);
    } catch (error) {
      console.error("Error saving notification:", error);
    }
  });
  

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.data.userId);
    delete connectedUsers[socket.data.userId]; 
    io.emit("update_users", Object.keys(connectedUsers));
  });
  
})



const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
