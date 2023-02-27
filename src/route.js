import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import FriendForm from "./pages/friendForm/FriendForm";
import MainPage from "./Components/mainPage/MainPage";
import Chat from "./pages/chat/Chat";

const ChatRoutes = () => {
  return (
    <Routes>
      <Route path="/mainpage" element={<MainPage />} />
      <Route path="/friendform" element={<FriendForm />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="chats" element={<Chat />} />
      <Route path="/*">404 Not Found</Route>
      {/* //This is a fallback route. If none of the above routes match, this route will be rendered. */}
    </Routes>
  );
};

export default ChatRoutes;
