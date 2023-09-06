import "./App.css";
import DetectFace from "./pages/DetectFace";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./actions/User";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <div className="App">
        <Routers>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/detectface"
              element={isAuthenticated ? <DetectFace /> : <LogIn />}
            />
            <Route exact path="/login" element={<LogIn />} />

            <Route exact path="/logup" element={<LogUp />} />
          </Routes>
        </Routers>
      </div>
    </>
  );
}

export default App;
