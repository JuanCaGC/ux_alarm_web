import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './resets.css';
import Proyectos from './components/Proyectos/Proyectos';
import DetalleProyecto from './components/ProyectoDetalle/DetalleProyecto';
import DetalleTarea from './components/DetalleTarea/DetalleTarea';
import Registro from './components/Registro/Registro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="registro" element={<Registro/>} />
        <Route path="proyectos" element={<Proyectos/>} />
        <Route path="proyectos/detalle/:id" element={<DetalleProyecto/>} />
        <Route path="proyectos/detalle/tarea/:id" element={<DetalleTarea/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
