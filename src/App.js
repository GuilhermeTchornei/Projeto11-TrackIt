import { BrowserRouter, Routes, Route } from "react-router-dom";
import Habits from "./Components/App/Habits";
import Today from "./Components/App/Today";
import Home from "./Components/Home/Home";
import Register from "./Components/Home/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
