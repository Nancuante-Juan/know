import ElAdaptadorDeBarras3000 from "./ElAdaptadorDeBarras3000";
import { useLocation } from "react-router";
import { Link } from "react-router";
import * as Almac from "./Almacenamiento";

export default function MenuPrincipalMobile({mostrar=false, close_event}) {
	var moscss = mostrar ? "flex md:hidden " : "hidden ";
	
	var categorias = Almac.obt_CATEGORIAS();
	const elements = categorias.map(cat =>
		<Boton texto={cat} link={"/c/"+cat} activado={false} />
	);


	return (
		<div className={moscss+" absolute top-0 flex-col min-h-lvh min-w-screen h-screen justify-end z-80 bg-black"}>
			<div className="flex px-4 bg-black text-white w-full min-h-13">
				<Link className="flex flex-col justify-center Fonts-DMSerif text-4xl bg-amarillo-hover" to="/">Know</Link>
			</div>

			<div className="flex flex-col h-full Fonts-RobotoC font-black text-3xl text-white justify-end">
				{elements}
				<Boton texto="Inicio" link={"/"} activado={true} />
			</div>

			<div className="flex p-4 justify-between">
				<Link className="p-2 bg-black" to="/Config/Suscripciones">
					<img src={`/${"src/assets/icons/discover_tune24.svg"}`} alt="Ajustes" className="h-12" />
				</Link>
				<button className="p-2 bg-black" onClick={close_event}>
					<img src={`/${"src/assets/icons/close_white24.svg"}`} alt="Cerrar" className="h-12" />
				</button>

			</div>
			<ElAdaptadorDeBarras3000 />
		</div>
	);
}



function Boton({texto, link}) {
	const ruta      = useLocation().pathname;
	const activado  = ruta === link;
	const parentcss = activado ? " text-(--rojo)" : " hover:bg-(--rojo) hover:text-white"
	const childcss  = activado ? " w-6 bg-(--rojo)" : " hover-parent w-1 bg-white"
	return (
		<Link to={link} className={"flex gap-2 items-center px-6 py-3 btn-barra-lateral "+parentcss}>
			<div className={"h-1 "+childcss}/> {texto}
		</Link>
	);
}