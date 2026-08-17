import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Categoria from "./Categoria.jsx";
import Configuracion from "./Configuracion.jsx";
import Noticia from "./Noticia.jsx";
import * as Almac from "./Almacenamiento.js";
Almac.aplicar_LECTURA();
createRoot(document.getElementById('root')).render(
	<BrowserRouter> <Routes>
		<Route path="/"         element={<App />} />
		<Route path="/c/:cat/"  element={<Categoria />} />
		<Route path="/n/:noti/" element={<Noticia />} />
		<Route path="/Config"              element={<Configuracion />} />
		<Route path="/ConfigCategorias"    element={<Configuracion />} />
		<Route path="/ConfigSuscripciones" element={<Configuracion />} />
	</Routes> </BrowserRouter>
);