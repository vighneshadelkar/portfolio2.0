import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Projectspg from "./Pages/Projectspg";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projectspg/>} />
          <Route path="*" element={<div>404 Not Found</div>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;