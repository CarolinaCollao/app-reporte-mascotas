import React, { useContext } from 'react';
import { Context } from './context/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
import Prueba from './pages/prueba/Prueba';



function App() {

  const { usuario, setUsuario } = useContext(Context);

  console.log(usuario)

  return (
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/prueba' element= {<Prueba /> } />
          <Route path="/reportes" element={< Reportes />} />
          <Route path="/reportes/:reporteId" element={< Detalle />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />

          {usuario.conectado &&
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
