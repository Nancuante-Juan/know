import { Link, useLocation } from "react-router";
import back_ico from "./assets/icons/back_gris24.svg"

export default function BarraLateral() {
	return (
		<div className="lg:flex flex-col min-w-48 text-gris Fonts-RobotoC font-black text-2xl hidden py-8">
			<Link to="/" className="flex gap-2 items-center text-2xl mb-8 px-2 py-3 hover:bg-[#99999933]">
				<img src={back_ico} color="white" />
				Volver
			</Link>
			<div className="flex flex-col ">
				<BotonLateral texto="Suscripciones" link="/Config/Suscripciones" />
				<BotonLateral texto="Categorías" link="/Config/Categorias" />
				<BotonLateral texto="Lectura" link="/Config/Lectura" />
			</div>
		</div>
	);
}

function BotonLateral({texto, link}) {
	const ruta      = decodeURI(useLocation().pathname);
	const activado  = ruta === link;
	const parentcss = activado ? " text-(--rojo)" : " hover:bg-(--rojo) hover:text-white"
	const childcss  = activado ? " w-6 bg-(--rojo)" : " hover-parent w-1 bg-(--gris)"
	return (
		<Link to={link} className={"flex gap-1 items-center px-2 py-3 btn-barra-lateral "+parentcss}>
			<div className={"h-1 "+childcss}/> {texto}
		</Link>
	);
}