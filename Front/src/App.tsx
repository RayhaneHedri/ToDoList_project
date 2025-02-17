import React from "react";
import "./App.scss";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import Sidebar from "./layout/sidebar/Sidebar";
import PrimaryButton from "./components/primaryButton/PrimaryButton";
import SecondButton from "./components/secondButton/secondButton";
import { DownloadOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h1>Welcome to the to do list</h1>
          <p>what do you have for today?</p>
          <div>
            <PrimaryButton>hello</PrimaryButton>
            <PrimaryButton>
              <span>
                <DownloadOutlined />
              </span>
              Download
            </PrimaryButton>
            <SecondButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
