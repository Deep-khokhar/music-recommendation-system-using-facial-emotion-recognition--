import './App.css';
import DetectFace from './pages/DetectFace';
import Homepage from './pages/Homepage';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import LogIn from './pages/LogIn';
import LogUp from './pages/LogUp';

function App() {
  return (
    <>
    <div className="App">
    <Routers>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route exact path="/Detectface" element={<DetectFace/>} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<LogIn/>} />
      </Routes>
      <Routes>
        <Route exact path="/logup" element={<LogUp/>} />
      </Routes>
      
      
      
      </Routers>
    </div>
    </>
  );
}

export default App;
