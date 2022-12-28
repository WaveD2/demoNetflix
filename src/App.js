import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search/Search";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
