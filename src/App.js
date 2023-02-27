import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/login/Login";
import SideBar from "./Components/sidebar/SideBar";
import Signup from "./Components/signup/Signup";
import ChatRoutes from "./route";

function App() {
  const [visible, setVisible] = useState(false);
  console.log(visible)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setVisible={setVisible} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat/dashboard" element={<SideBar />} />
      </Routes>

      <SideBar>
        <ChatRoutes />
      </SideBar> 


    </div>
  );
}

export default App;
