import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/works/:id" element={<Work />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;