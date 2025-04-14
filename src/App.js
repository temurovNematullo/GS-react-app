import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./pages/Main";
import Feedback from "./components/feedback/feedback";
import { Route, Routes, Navigate, useLocation } from "react-router";
import CategoriesPage from "./pages/CategoriesPage";
import CatalogPage from "./pages/CatalogPage";
import CharactericPage from "./pages/CharactericPage";
import RegistForm from "./components/registration/registration";
import AuthForm from "./components/auth/authForm";
import { useEffect } from "react";
import { useState } from "react";
import CartPage from "./components/corz/cartPage";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<Navigate to="/Главная" />} />
        <Route path="/Главная" element={<Main />} />
        <Route path="/Все категории" element={<CategoriesPage />} />
        <Route path="/registrationForm" element={<RegistForm />} />
        <Route path="/authForm" element={<AuthForm />} />
        <Route path="/Каталог" element={<CatalogPage />} />
        <Route path="/Каталог/:id" element={<CharactericPage />} />
      </Routes>
      <CartPage isOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
