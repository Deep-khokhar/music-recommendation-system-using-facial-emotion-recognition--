import './App.css';
import Detect_Face from './pages/Detect_Face';
import Homepage from './pages/Homepage';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
    <Routers>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route exact path="/Detect_face" element={<Detect_Face/>} />
      </Routes>
      
      </Routers>
    </div>
    </>
  );
}

export default App;
