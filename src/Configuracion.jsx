import { useLocation } from "react-router";
import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";
import ConfigLectura from "./ConfigLectura";
import ConfigCategorias from "./ConfigCategorias";
import ConfigMedios from "./ConfigMedios";

export default function Configuracion() {
	const location = useLocation();
	const ruta = location.pathname;

	var contenido = <ConfigLectura completo={true} />;
	var titulo = "Lectura";
	if (ruta === "/ConfigCategorias") { contenido = <ConfigCategorias />; titulo = "Categorías"; }
	else if (ruta === "/ConfigSuscripciones") { contenido = <ConfigMedios />; titulo = "Suscripciones"; }
	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row pl-4 pr-8 py-8 gap-8">
				<BarraLateral />
				<div className="flex flex-col w-full">
					<p className="Fonts-DMSerif text-8xl pb-4">{titulo}</p>
					{contenido}
				</div>
			</div>
		</div>
	);
}