import { useState } from "react";
import { useLocation } from "react-router";
import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";
import ConfigLectura from "./ConfigLectura";
import ConfigCategorias from "./ConfigCategorias";
import ConfigMedios from "./ConfigMedios";
import BarraPrincipalMobile from "./BarraPrincipalMobile";
import MenuPrincipalMobile from "./MenuPrincipalMobile";
import SelectorMobile from "./SelectorMobile";

export default function Configuracion() {
	const ruta = decodeURI(useLocation().pathname);

	var contenido;
	var titulo;
	if (ruta === "/Config/Categorias") { contenido = <ConfigCategorias />; titulo = "Categorías"; }
	else if (ruta === "/Config/Suscripciones") { contenido = <ConfigMedios />; titulo = "Suscripciones"; }
	else { contenido = <ConfigLectura completo={true} />; titulo = "Lectura";}


	//////// MENU /////////////
	const [menu_mostrar, setMenu_mostrar] = useState(false);
	function ocultar() { setMenu_mostrar(false); }
	const [selector_mostrar, setSelector_mostrar] = useState(false);
	function ocultar_selector() { setSelector_mostrar(false); }

	const [prev_page, setPrev_page] = useState(ruta);
	if (ruta !== prev_page){
		ocultar_selector();
		window.scrollTo(0,0);
		setPrev_page(ruta);
	}

	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row pl-0 lg:pl-4 trans min-h-[calc(100vh-52px)] " style={{backgroundColor: "var(--lectura-color-fondo)", backgroundImage: "var(--lectura-ruido)", color: "var(--lectura-color-texto)"}}>
				<BarraLateral />
				<div className="flex flex-col w-full max-h-[calc(100vh-52px)] py-8 px-8 overflow-x-hidden overflow-y-auto">
					<p className="Fonts-DMSerif text-8xl pb-4">{titulo}</p>
					{contenido}
					<div className="min-h-40 md:min-h-0" />
				</div>
			</div>
			
			<BarraPrincipalMobile too_small="lg:hidden">
				<button className="p-2 w-full bg-black text-white text-2xl Fonts-RobotoC font-black min-h-12" onClick={e => setSelector_mostrar(true)}>
					- {titulo}
				</button>
				<button className="block md:hidden p-2 bg-black" onClick={e => setMenu_mostrar(true)}>
					<img src={`/${"src/assets/icons/menu24.svg"}`} alt="Menú" className="min-h-8 min-w-8" />
				</button>
			</BarraPrincipalMobile>
			<MenuPrincipalMobile mostrar={menu_mostrar} close_event={ocultar} />
			<SelectorMobile mostrar={selector_mostrar} close_event={ocultar_selector} lista={["Suscripciones", "Categorias", "Lectura"]} urls={["/Config/Suscripciones", "/Config/Categorias", "/Config/Lectura"]} too_small="lg:hidden" />
		</div>
	);
}