import React, { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import ProtectedRouter from "./router/ProtectedRouter";

import Home from "./pages/home/Home";
import Reportes from "./pages/reportes/Reportes";
import Detalle from "./pages/detalle/Detalle";
import Publicar from "./pages/publicar/Publicar";
import Perfil from "./pages/perfil/Perfil";
import NotFound from "./pages/notFound/NotFound";
import Footer from "./pages/footer/Footer";
import Login from "./pages/ingresar/Login";
import Navbar from "./components/navbar/Navbar";
import Registrarse from "./pages/registrarse/Registrarse";
import HomePrivado from './pages/homeprivado/HomePrivado';



function App() {

  const { conectado, setConectado } = useContext(Context);

  console.log(conectado)

  return (
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reportes" element={< Reportes />} />
          <Route path="/reportes/:reporteId" element={< Detalle />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />

          {conectado &&
            <>
              <Route path="/homeprivado" element={<HomePrivado />} />
              <Route path="/publicar" element={<Publicar />} />
              <Route path="/perfil" element={<Perfil />} />
            </>
          }

        </Routes>
        <Footer />
      </BrowserRouter>

  )
}

export default App
