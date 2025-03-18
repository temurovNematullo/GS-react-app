import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sale from "./components/sale/sale";
import Main from "./pages/Main";
import Feedback from "./components/feedback/feedback";
import { Route, Routes, Navigate } from "react-router";
import Categories from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <Sale />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Главная" />} />
        <Route path="/Главная" element={<Main />} />
        <Route path="Все категории" element={<Categories />} />
      </Routes>

      <Feedback />

      <Footer />
    </div>
  );
}

export default App;
