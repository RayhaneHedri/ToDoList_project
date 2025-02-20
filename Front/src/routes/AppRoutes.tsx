import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
import TasksPage from "../pages/tasks/TasksPage";
import UsersPage from "../pages/users/UsersPage";
import ProfilePage from "../pages/profile/ProfilePage";
import GalleryPage from "../pages/gallery/GalleryPage";
import LoadingPage from "../pages/loading/LoadingPage";

const AppRoutes: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();


  if (!initialized) {
    return <LoadingPage/>;
  }

  return (
    <Routes>
      {keycloak.authenticated ? (
        <>
          <Route path="/" element={<TasksPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
