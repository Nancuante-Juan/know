import { useLocation } from "react-router";
import { Link } from "react-router";
import * as Almac from "./Almacenamiento";

export default function MenuPrincipalMobile({mostrar=false, close_event, lista=[], urls=[], too_small="md:hidden"}) {
	var moscss = mostrar ? "flex "+too_small+" " : "hidden ";
	
	const elements = lista.map(el =>
		<Boton texto={el} link={urls[lista.indexOf(el)]} />
	);


	return (
		<div className={moscss+" fixed flex-col min-h-lvh min-w-screen bottom-0 h-screen justify-end z-80 p-4 gap-4 bg-[#00000033]"}>
			<button className="h-screen" onClick={close_event} />


			<div className="flex flex-col Fonts-RobotoC font-black text-2xl text-white justify-end bg-black">
				{elements}
			</div>
		</div>
	);
}



function Boton({texto, link}) {
	const ruta      = useLocation().pathname;
	const activado  = ruta === link;
	const parentcss = activado ? " text-(--rojo)" : " hover:bg-(--rojo) hover:text-white"
	const childcss  = activado ? " w-6 bg-(--rojo)" : " hover-parent w-1 bg-white"
	return (
		<Link to={link} className={"flex gap-2 items-center min-h-12 px-3 py-3 btn-barra-lateral "+parentcss}>
			<div className={"h-1 "+childcss}/> {texto}
		</Link>
	);
}