import { Link, useLocation } from "react-router";

export default function BarraLateral() {
	const location = useLocation();
	const ruta = location.pathname;

	return (
		<div className="lg:flex flex-col min-w-48 text-gris Fonts-RobotoC font-black text-2xl hidden py-8">
			<Link to="/" className="flex gap-2 items-center text-2xl mb-8 px-2 py-3 hover:bg-[#99999933]">
				<img src={`/${"src/assets/icons/back_gris24.svg"}`} color="white" />
				Volver
			</Link>
			<div className="flex flex-col ">
				<BotonLateral texto="Suscripciones" link="/ConfigSuscripciones" activado={ruta === "/ConfigSuscripciones"} />
				<BotonLateral texto="Categorías" link="/ConfigCategorias" activado={ruta === "/ConfigCategorias"} />
				<BotonLateral texto="Lectura" link="/Config" activado={ruta === "/Config"} />
			</div>
		</div>
	);
}

function BotonLateral({texto, link, activado = false}) {
	if (activado) { return (
		<Link to={link} className="flex gap-1 items-center px-2 py-3" style={{color: "var(--rojo)"}}>
			<div className="h-1 w-6 bg-(--rojo)"/> {texto}
		</Link>
	); } else { return (
		<Link to={link} className="flex gap-1 items-center text-blanco px-2 py-3 hover:bg-(--rojo) hover:text-white btn-barra-lateral">
			<div className="h-1 w-1 bg-(--gris) hover-parent"/> {texto}
		</Link>
	); }
}