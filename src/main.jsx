import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Categoria from "./Categoria.jsx";
import Configuracion from "./Configuracion.jsx";
import Noticia from "./Noticia.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter> <Routes>
		<Route path="/"         element={<App />} />
		<Route path="/c/:cat/"  element={<Categoria />} />
		<Route path="/n/:noti/" element={<Noticia />} />
		<Route path="/Config"   element={<Configuracion />} />
		
	</Routes> </BrowserRouter>
);