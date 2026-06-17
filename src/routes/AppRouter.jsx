import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Inicio from "../pages/Inicio";
import Detalle from "../pages/Detalle";
import Favoritos from "../pages/Favoritos";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle/:name" element={<Detalle />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;