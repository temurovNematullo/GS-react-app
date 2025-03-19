import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sale from "./components/sale/sale";
import Main from "./pages/Main";
import Feedback from "./components/feedback/feedback";
import { Route, Routes, Navigate } from "react-router";
import CategoriesPage from "./pages/CategoriesPage";
import CatalogPage from "./pages/CatalogPage";
import CharactericPage from "./pages/CharactericPage";

function App() {
  return (
    <div className="App">
      <Sale />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Главная" />} />
        <Route path="/Главная" element={<Main />} />
        <Route path="Все категории" element={<CategoriesPage />} />

        <Route path="Каталог" element={<CatalogPage />} />
        <Route
          path="Каталог/Вариативный замок Golden Soft для отеля."
          element={<CharactericPage />}
        />
      </Routes>
      {/* <Popular_products /> */}
      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
