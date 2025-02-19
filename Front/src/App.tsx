import React from "react";
import "./App.scss";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Sidebar from "./layout/sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  // const users = [
  //   { name: "Ranim", role: "Administrator", email: "ranim@example.com" },
  // ];

  // const tasks: { taskTitle: string; assignedUser: string; state: TaskState; days: number }[] = [
  //   { taskTitle: "Task 1", assignedUser: "Ranim", state: "done", days: 3 },
  //   { taskTitle: "Task 2", assignedUser: "Ahmed", state: "not started", days: 5 },
  // ];

  return (
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
  );
};

export default App;
