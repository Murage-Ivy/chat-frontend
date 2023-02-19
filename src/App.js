import { Route, Routes } from "react-router-dom";
import "./App.css";
import FriendForm from "./Components/friendForm/FriendForm";
import MainPage from "./Components/mainPage/MainPage";
import Signup from "./Components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={Log}/> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/friends/form" element={<FriendForm />} />
      </Routes>
    </div>
  );
}

export default App;
