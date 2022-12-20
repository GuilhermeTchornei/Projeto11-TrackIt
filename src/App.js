import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Habits from "./Components/App/Habits";
import Today from "./Components/App/Today";
import Home from "./Components/Home/Home";
import Register from "./Components/Home/Register";
import UserContext from "./Components/Contexts/UserContext";
import ProgressContext from "./Components/Contexts/ProgressContext";
import Historic from "./Components/App/Historic";

function App() {
  const [user, setUser] = useState({});
  const [progress, setProgress] = useState(0)

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <ProgressContext.Provider value={{ progress, setProgress }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/hoje" element={<Today />} />
              <Route path="/habitos" element={<Habits />} />
              <Route path="/historico" element={<Historic />} />
            </Routes>
          </BrowserRouter>
        </ProgressContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
