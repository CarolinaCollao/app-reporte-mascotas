import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouter from "./router/ProtectedRouter";

import Home from "./pages/home/Home";
import Reportes from "./pages/reportes/Reportes";
import Detalle from "./pages/detalle/Detalle";
import Publicar from "./pages/publicar/Publicar";
import Perfil from "./pages/perfil/Perfil";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./pages/footer/Footer";

import Navbar from "./components/navbar/Navbar";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reportes" element={< Reportes />} />
        <Route path="/reportes/:reporteId" element={< Detalle />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRouter />}>
          <Route path="/publicar" element={<Publicar />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
