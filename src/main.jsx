import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Configuracion from './Configuracion';

createRoot(document.getElementById('root')).render(
	<BrowserRouter> <Routes>
		<Route path="/" element={<App />} />
		<Route path="/set" element={<Configuracion />} />
	</Routes> </BrowserRouter>
);