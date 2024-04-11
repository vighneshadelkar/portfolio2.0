import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Projectspg from "./Pages/Projectspg";
import SingleProject from "./Pages/SingleProject";
import Aboutmepg from "./Pages/Aboutmepg";

function App() {
  const backtotop=()=>{
    window.scrollTo(0, 0);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/portfolio2.0/" element={<Home />} />
          <Route path="/portfolio2.0/projects" element={<Projectspg />} />
          <Route path="/portfolio2.0/project/:id" element={<SingleProject />} />
          <Route path="/portfolio2.0/aboutme" element={<Aboutmepg/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <button className="back" onClick={backtotop}><img src="/images/top.png" alt="" /></button>
      </div>
    </BrowserRouter>
  );
}

export default App;
