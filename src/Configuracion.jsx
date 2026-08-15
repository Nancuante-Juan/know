import BarraNavegacion from "./BarraNavegacion";
import BarraLateral from "./BarraLateral";

export default function Configuracion({child}) {
	return (
		<div className="flex flex-col">
			<BarraNavegacion />
			<div className="flex flex-row">
				<BarraLateral />
				{child}
			</div>
		</div>
	);
}