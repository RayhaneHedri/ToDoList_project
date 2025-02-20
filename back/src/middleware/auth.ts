import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {KeycloakTokenPayload} from "../types/keycloak";
import jwt from "jsonwebtoken";

dotenv.config();

export const validateTokenWithKeycloak = async (token: string) => {
  try {
    const response = await axios.post(process.env.KEYCLOAK_INTROSPECTION_URL, null, {
      params: {
        token,
        client_id: process.env.KEYCLOAK_CLIENT_ID,
      },
    });

    return response.data.active;
  } catch (error) {
    console.error("Error verifying token:", error);
    return false;
  }
};

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return;
  }

  try {
    const isValid = await validateTokenWithKeycloak(token);
    if (!isValid) {
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
      return; 
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Server error during token validation' });
  }
};


////check admin
export const checkAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return;
  }

  const decoded = jwt.decode(token) as KeycloakTokenPayload | null;
  if (decoded?.realm_access?.roles?.includes("admin")) {
    return next();
  }

  res.status(403).json({ message: "Forbidden: Admins only" });
};
