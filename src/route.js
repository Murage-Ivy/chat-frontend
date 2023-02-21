import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import FriendForm from "./pages/friendForm/FriendForm";
import MainPage from "./Components/mainPage/MainPage";

const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/friendform" element={<FriendForm />} />
      <Route path="/contacts" element={<Contact />} />
    </Routes>
  );
};

export default ChatRoutes;
