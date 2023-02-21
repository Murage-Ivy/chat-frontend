import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import FriendForm from "./pages/friendForm/FriendForm";
import Login from "./Components/login/Login";
import MainPage from "./Components/mainPage/MainPage";
import Signup from "./Components/signup/Signup";

const ChatRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={Log}/> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/friendform" element={<FriendForm />} />
      <Route path="/" element={<Login />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
};

export default ChatRoutes;
