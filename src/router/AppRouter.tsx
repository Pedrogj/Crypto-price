import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Coin } from "../pages/coin/Coin";
import { Home } from "../pages/home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coin/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};
