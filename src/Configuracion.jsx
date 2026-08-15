import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";
import ConfigLectura from "./ConfigLectura";

export default function Configuracion() {
	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row">
				<BarraLateral />
				<ConfigLectura></ConfigLectura>
				{/* UTILIZA CONFIG LECTURA PARA LA PAGINA DE LECTURA */}
			</div>
		</div>
	);
}