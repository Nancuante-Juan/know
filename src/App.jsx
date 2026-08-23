import { useState } from "react";
import { useLocation } from "react-router";
import * as Recibir from "./RecibirNoticias";
import * as Almac from "./Almacenamiento";
import BarraNavegación from "./BarraNavegacion";
import AutoGrid from "./AutoGrid";
import BarraPrincipalMobile from "./BarraPrincipalMobile";
import MenuPrincipalMobile from "./MenuPrincipalMobile";
import * as main from "./main";

export default function App() { 
	Recibir.reset_ya_mostrado();
	const inicio = Recibir.Filtrado("", 4);
	const cats = Almac.obt_CATEGORIAS();
	const cats_noticias = cats.map(cat =>
		<AutoGrid tipo="minicategoria" seccion={cat} lista={Recibir.Filtrado(cat, 6)}/>
	);

	//////// MENU /////////////
	const [menu_mostrar, setMenu_mostrar] = useState(false);
	function ocultar() { setMenu_mostrar(false); }	
	
	
	return (
		<div className="bg-black h-fit md:max-h-screen overflow-hidden">
			<div className="h-fit md:max-h-screen overflow-hidden">
				<BarraNavegación />
				
				<div className="md:overflow-y-auto overflow-x-hidden snap-mandatory trans MAIN-APP mandatory-scroll-main">
					<AutoGrid tipo="inicio" lista={inicio} invertir={true}/>
					{cats_noticias}
					<div className="min-h-40 md:min-h-0" />
				</div>
			</div>

			<BarraPrincipalMobile>
				<button className="p-2 bg-black" onClick={e => setMenu_mostrar(true)}>
					<img src={`/${"src/assets/icons/menu24.svg"}`} alt="Menú" className="min-h-12 min-w-12" />
				</button>
			</BarraPrincipalMobile>
			<MenuPrincipalMobile mostrar={menu_mostrar} close_event={ocultar} />
		</div>
	);
}