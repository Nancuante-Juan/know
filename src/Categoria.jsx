import { useState } from "react";
import { useParams } from "react-router";
import * as Recibir from "./RecibirNoticias";
import BarraNavegación from "./BarraNavegacion";
import AutoGrid from "./AutoGrid";
import DefaultGrid from "./DefaultGrid";
import AutoPortada from "./AutoPortada";
import BarraPrincipalMobile from "./BarraPrincipalMobile";
import MenuPrincipalMobile from "./MenuPrincipalMobile";

export default function Categoria(){
	const params = useParams();
	const categoria_dominante = params.cat;	
	Recibir.reset_ya_mostrado();
	const lista_noticias = Recibir.Filtrado(categoria_dominante);
	const noticias = lista_noticias.slice(4).map(not =>
		<AutoPortada noticia={not} />
	);

	function grilla_no_noticias() { 
		if (noticias.length > 3) { return (
			<DefaultGrid tipo="infinite">{noticias}</DefaultGrid>
		);} else { return; }
	}

	//////// MENU /////////////
	const [menu_mostrar, setMenu_mostrar] = useState(false);
	function ocultar() { setMenu_mostrar(false); }

	const [prev_page, setPrev_page] = useState(categoria_dominante);
	if (categoria_dominante !== prev_page){
		ocultar();
		window.scrollTo(0,0);
		setPrev_page(categoria_dominante);
		const collection = document.getElementsByClassName("trans");
		for (let i = 0; i < collection.length; i++) {
			collection[i].animate([{opacity:0},{opacity:1}],{duration: 200}).play();
		}
	}
	
	return (
		<div className="bg-black overflow-hidden">
			<div className="max-h-screen overflow-x-hidden overflow-y-scroll md:overflow-hidden">
				<BarraNavegación />
				
				<div className="overflow-y-auto overflow-x-hidden trans" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)",}}>
					<AutoGrid tipo="inicio" lista={lista_noticias.slice(0,4)} dentro={nombre_categoria(categoria_dominante)}/>
					{grilla_no_noticias()}
					<div className="min-h-40 md:min-h-0" />
				</div>
			</div>

			<BarraPrincipalMobile>
				<button className="p-2 bg-black" onClick={e => setMenu_mostrar(true)}>
					<img src={`/${"src/assets/icons/menu24.svg"}`} alt="Menú" className="h-12" />
				</button>
			</BarraPrincipalMobile>
			<MenuPrincipalMobile mostrar={menu_mostrar} close_event={ocultar} />
		</div>
	);
}

function nombre_categoria(categoria_dominante) { return (
	<div className="flex flex-col text-8xl text-white Fonts-DMSerif w-full h-full">
		<div className="flex flex-col w-full max-h-0"> 
			<div className="desenfoque-prog -scale-100 min-w-[100%+16px] min-h-50 -m-2px"></div>
		</div>
		<p className="z-5 p-4">{categoria_dominante}</p>
	</div>
); }