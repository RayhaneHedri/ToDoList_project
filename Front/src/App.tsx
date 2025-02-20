import React from "react";
import "./App.scss";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

const App: React.FC = () => {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: "login-required" }} >
      <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <AppRoutes />
        </div>
      </div>
      <Footer />
    </div>
    </ReactKeycloakProvider>
  );
};

export default App;
