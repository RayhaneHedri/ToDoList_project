import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../types/user";

dotenv.config();

export const todolistDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB2_NAME,
  username: process.env.DB2_USER,
  password: process.env.DB2_PASSWORD,
  entities: [User],
  synchronize: true,
  logging: true,
  logger: "advanced-console",
});

todolistDB.initialize()
  .then(() => console.log("Connected to the todolist Database"))
  .catch((error) =>
    console.error("Error connecting to the todolist Database", error)
  );
