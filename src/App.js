import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Components/Habits/Habits";
import Home from "./Components/Home/Home";
import Register from "./Components/Home/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
