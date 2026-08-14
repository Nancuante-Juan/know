import { useParams } from "react-router";
import { Link } from "react-router";
import * as Almac from "./Almacenamiento";

export default function BarraNavegación ({catego_manual}) { 
	const params = useParams();
	const categoria_dominante = params.cat;	

	var categorias = catego_manual;
	if (catego_manual == undefined){
		categorias = Almac.obt_CATEGORIAS();
	}
	const elements = categorias.map(cat =>
		<BotonBarra texto={cat} link={"/c/"+cat} activado={cat==categoria_dominante} />
	);
	
	return (
	<div className="flex px-4 bg-black text-white w-full">
		<Link className="flex flex-col justify-center Fonts-DMSerif text-4xl bg-amarillo-hover" to="/">Know</Link>
		<div className="flex flex-row gap-4 w-full justify-end">
			<div className="flex overflow-x-scroll overflow-y-hidden scrollbar-none items-center" style={{maxWidth: "calc(100vw - (13.5rem + 2rem + 1rem))"}}>
				{elements}
			</div>
			<div className="flex min-w-8 gap-4 items-center">
				<img src={`/${"src/assets/icons/discover_tune24.svg"}`} className="h-8"/>
			</div>
		</div>
	</div>
	
	);
}

function BotonBarra ({texto, link, activado = false}) { 
	var isBold = " bg-amarillo-hover underline";
	if (activado) { isBold = " font-black";}
	
	return (
		<Link to={link} className="flex text-xl hover:no-underline px-2 py-3 hover-parent">
			<div className={"max-h-7" + isBold}>{texto}</div>
		</Link>
	);
}