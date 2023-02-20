import React from "react";
import { Route, Routes } from "react-router-dom";
import FriendForm from "./Components/friendForm/FriendForm";
import MainPage from "./Components/mainPage/MainPage";
import Signup from "./Components/signup/Signup";

const ChatRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={Log}/> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/friendform" element={<FriendForm />} />
    </Routes>
  );
};

export default ChatRoutes;
