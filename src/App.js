import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" >
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={ <Home />} />
            </Route>
            
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
