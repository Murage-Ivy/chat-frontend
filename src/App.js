import "./App.css";
import SideBar from "./Components/sidebar/SideBar";
import ChatRoutes from "./route";

function App() {
  return (
    <div className="App">
      <SideBar>
        <ChatRoutes />
      </SideBar>
    </div>
  );
}

export default App;
