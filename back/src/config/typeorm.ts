import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: ["src/types/*.ts"],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => console.log("Connected to PostgreSQL with TypeORM"))
  .catch((error) => console.error("Error connecting to TypeORM database", error));
