import { useLocation } from "react-router";
import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";
import ConfigLectura from "./ConfigLectura";
import ConfigCategorias from "./ConfigCategorias";
import ConfigMedios from "./ConfigMedios";

export default function Configuracion() {
	const location = useLocation();
	const ruta = location.pathname;

	var contenido;
	var titulo;
	if (ruta === "/Config/Categorias") { contenido = <ConfigCategorias />; titulo = "Categorías"; }
	else if (ruta === "/Config/Suscripciones") { contenido = <ConfigMedios />; titulo = "Suscripciones"; }
	else { contenido = <ConfigLectura completo={true} />; titulo = "Lectura";}
	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row pl-0 lg:pl-4 trans min-h-[calc(100vh-52px)] " style={{backgroundColor: "var(--lectura-color-fondo)", backgroundImage: "var(--lectura-ruido)", color: "var(--lectura-color-texto)"}}>
				<BarraLateral />
				<div className="flex flex-col w-full max-h-[calc(100vh-52px)] py-8 px-8 overflow-x-hidden overflow-y-auto">
					<p className="Fonts-DMSerif text-8xl pb-4">{titulo}</p>
					{contenido}
				</div>
			</div>
		</div>
	);
}