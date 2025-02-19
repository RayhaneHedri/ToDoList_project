import React from "react";
import { Routes, Route } from "react-router-dom";
import TasksPage from "../pages/tasks/TasksPage";
import UsersPage from "../pages/users/UsersPage";
import ProfilePage from "../pages/profile/ProfilePage";
import GalleryPage from "../pages/gallery/GalleryPage";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

export default AppRoutes;
