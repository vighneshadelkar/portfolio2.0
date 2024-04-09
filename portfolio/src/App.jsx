import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Projectspg from "./Pages/Projectspg";
import SingleProject from "./Pages/SingleProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projectspg />} />
          <Route path="/project/:id" element={<SingleProject />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
       
      </div>
     
    </BrowserRouter>
  );
}

export default App;
