import { useLocation } from "react-router";
import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";
import ConfigLectura from "./ConfigLectura";
import ConfigCategorias from "./ConfigCategorias";
import ConfigMedios from "./ConfigMedios";

export default function Configuracion() {
	const location = useLocation();
	const ruta = location.pathname;

	var contenido = <ConfigLectura />;
	if (ruta === "/ConfigCategorias") { contenido = <ConfigCategorias />; }
	else if (ruta === "/ConfigSuscripciones") { contenido = <ConfigMedios />; }
	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row">
				<BarraLateral />
				{contenido}
			</div>
		</div>
	);
}