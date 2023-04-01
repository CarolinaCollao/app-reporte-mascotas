import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Estoy en ruta raíz</div>}/>
        <Route path="/reportes" element={<div>Reportes</div>}/>
      
      
        <Route path="/publicar" element={<div>Publicar</div>}/>
        <Route path="/perfil" element={<div>Perfil</div>}/>

        <Route path="*" element={<div>Ruta no existe</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
