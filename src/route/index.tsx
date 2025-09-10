import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

const Rotas = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
