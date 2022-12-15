import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutpage from "./pages/Aboutpage";
import Classpage from "./pages/Classpage";
import Contactpage from "./pages/Contactpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="facility" element={<Aboutpage />} />
        <Route path="class" element={<Classpage />}/>
        <Route path="contact" element={<Contactpage />}/>
      </Routes>
    </div>
  );
}

export default App;
