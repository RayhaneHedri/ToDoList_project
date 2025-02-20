import { useState } from "react";
import axios from "axios";

interface AddUserData {
  username: string;
  email: string;
  password: string;
}

interface AddUserResponse {
  message: string;
  newUser?: any;
}

export const useAddUser = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addUser = async (userData: AddUserData, token: string): Promise<AddUserResponse | null> => {
    setLoading(true);
    setError(null);
  
    console.log("Sending request with token:", token); 
  
    try {
      const response = await axios.post<AddUserResponse>(
        "http://localhost:3000/user/add-user",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Response data:", response.data); 
      setLoading(false);
      return response.data;
    } catch (err: any) {
      console.error("Error response:", err.response?.data);
      setLoading(false);
      setError(err.response?.data?.message || "Failed to add user");
      return null;
    }
  };
  

  return { addUser, loading, error };
};
