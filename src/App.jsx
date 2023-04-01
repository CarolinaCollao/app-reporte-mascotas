import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./router/ProtectedRouter";

import Home from "./pages/home/Home";
import Reportes from "./pages/reportes/Reportes";
import Detalle from "./pages/detalle/Detalle";
import Publicar from "./pages/publicar/Publicar";
import Perfil from "./pages/perfil/Perfil";
import NotFound from "./pages/notFound/NotFound";

import Navbar from "./components/navbar/Navbar";


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reportes" element={< Reportes />} />
        <Route path="/reportes/:reporteId" element={< Detalle />} />

        <Route element= { <ProtectedRouter />}>
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
