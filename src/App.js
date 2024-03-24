import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
