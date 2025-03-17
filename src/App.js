import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Sale from "./components/sale/sale";
import Callback from "./components/callback/callback";
import Mainsection from "./components/mainsection/mainsection";

function App() {
  return (
    <div className="App">
      <Sale />
      <Header />
      <Mainsection />
      <Callback />
      <Footer />
    </div>
  );
}

export default App;
