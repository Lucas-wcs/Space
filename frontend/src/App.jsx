import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/Home";
import Planets from "@pages/Planets";
import Savoir from "@pages/Savoir";
import Quiz from "@pages/Quiz";
import Footer from "@components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/savoir" element={<Savoir />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
