import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chapter from "./pages/Chapter";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<Work />} />
        <Route path="/works/:id/:chapter" element={<Chapter/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/public" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;