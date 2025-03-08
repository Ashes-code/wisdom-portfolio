import { Routes, Route } from "react-router-dom";
import GSAPDemo from "./gsap";
import App from "./App.jsx";

const BASE_PATH = import.meta.env.VITE_BASE_PATH || "";

const Navigation = () => {
  return (
    <Routes>
      <Route path={`${BASE_PATH}/`} element={<GSAPDemo />} />
      <Route path={`${BASE_PATH}/home`} element={<App />} />
    </Routes>
  );
};

export default Navigation;
