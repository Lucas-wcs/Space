import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/Home";
import Planets from "@pages/Planets";
import Savoir from "@pages/Savoir";
import Quiz from "@pages/Quiz";
import GeneralStars from "@components/GeneralStars";
import "./css/stars/GeneralStars.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GeneralStars />
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/savoir" element={<Savoir />} />
            <Route path="/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
