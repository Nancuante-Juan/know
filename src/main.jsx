import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Categoria from "./Categoria.jsx";

createRoot(document.getElementById('root')).render(
	<BrowserRouter> <Routes>
		<Route path="/" element={<App />} />
		<Route path="/c/:cat/" element={<Categoria />} />
	</Routes> </BrowserRouter>
);