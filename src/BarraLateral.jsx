import { Link, useLocation } from "react-router";

export default function BarraLateral() {
	const location = useLocation();
	const ruta = location.pathname;

	return (
		<div className="flex flex-col px-4 pt-8 min-w-56 text-gris">
			<Link to="/" className="flex gap-2 items-center Fonts-DMSerif text-2xl mb-8 px-2 py-1 -mx-2 hover:bg-black hover:text-white">
				{"<- Volver"}
			</Link>
			<div className="flex flex-col gap-2 text-xl">
				<BotonLateral texto="Suscripciones" link="/ConfigSuscripciones" activado={ruta === "/ConfigSuscripciones"} />
				<BotonLateral texto="Categorías" link="/ConfigCategorias" activado={ruta === "/ConfigCategorias"} />
				<BotonLateral texto="Lectura" link="/Config" activado={ruta === "/Config"} />
			</div>
		</div>
	);
}

function BotonLateral({texto, link, activado = false}) {
	if (activado) { return (
		<Link to={link} className="flex gap-2 items-center font-black px-2 py-1 -mx-2" style={{color: "var(--rojo)"}}>
			— {texto}
		</Link>
	); } else { return (
		<Link to={link} className="flex gap-2 items-center text-blanco px-2 py-1 -mx-2 hover:no-underline hover:bg-[var(--rojo)] hover:text-white">
			· {texto}
		</Link>
	); }
}