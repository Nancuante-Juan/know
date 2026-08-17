import { useState } from "react";
import TarjetaMedio from "./TarjetaMedio";
import * as Almac from "./Almacenamiento";

const INFO_MEDIOS = {
	"Tiempo Sur":    { icono: "src/assets/icons/iconos_medios/Tiemposur-logo.webp", descripcion: "Información actualizada minuto a minuto las 24 horas.", categorias: ["Policiales", "Sociedad", "Politica"] },
	"Olé":           { icono: "src/assets/icons/iconos_medios/Ole-logo.png", descripcion: "Noticias deportivas de Argentina y el mundo.", categorias: ["Deportes"] },
	"Crónica":       { icono: "src/assets/icons/iconos_medios/Cronica-logo.png", descripcion: "Últimas noticias de Neuquén, Río Negro y la Patagonia Argentina.", categorias: ["Policiales", "Politica", "Sociedad", "Salud"] },
	"TyC Sports":    { icono: "src/assets/icons/iconos_medios/Tycsports-logo.png", descripcion: "Toda la información sobre fútbol, básquet y el resto de las disciplinas.", categorias: ["Deportes"] },
	"La Nacion":     { icono: "src/assets/icons/iconos_medios/LaNacion-logo.webp", descripcion: "Las últimas noticias de la Argentina y del mundo en tiempo real.", categorias: ["Economia", "Sociedad", "Farandula", "Politica", "Deportes"] },
	"El Economista": { icono: "src/assets/icons/iconos_medios/ElEconomista-logo.png", descripcion: "Últimas noticias sobre la economía argentina y del mundo.", categorias: ["Economia", "Sociedad", "Politica", "Tecnologia"] },
	"Río Negro":     { icono: "src/assets/icons/iconos_medios/RioNegro-logo.webp", descripcion: "Últimas noticias de Neuquén, Río Negro y la Patagonia Argentina.", categorias: ["Economia", "Deportes", "Turismo", "Politica", "Policiales"] },
};

export default function ConfigMedios() {
	const [suscritos, setSuscritos] = useState(Almac.obt_MEDIOS());
	const disponibles = Object.keys(INFO_MEDIOS).filter(medio => !suscritos.includes(medio));

	function suscribir(medio) {
		const nuevos = [...suscritos, medio];
		setSuscritos(nuevos);
		Almac.guar_MEDIOS(nuevos.toString());
	}

	function desuscribir(medio) {
		const nuevos = suscritos.filter(m => m !== medio);
		setSuscritos(nuevos);
		Almac.guar_MEDIOS(nuevos.toString());
	}

	return (
		<div className="flex flex-col text-lg w-full gap-8">
			<div className="flex flex-col gap-4">
				<h1>Suscrito</h1>
				<div className="flex flex-wrap gap-4">
					{suscritos.map(medio =>
						<TarjetaMedio nombre={medio} icono={INFO_MEDIOS[medio]?.icono} descripcion={INFO_MEDIOS[medio]?.descripcion ?? ""} categorias={INFO_MEDIOS[medio]?.categorias ?? []} suscrito={true} onClick={() => desuscribir(medio)} />
					)}
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<h1>Disponible</h1>
				<div className="flex flex-wrap gap-4">
					{disponibles.map(medio =>
						<TarjetaMedio nombre={medio} icono={INFO_MEDIOS[medio].icono} descripcion={INFO_MEDIOS[medio].descripcion} categorias={INFO_MEDIOS[medio].categorias} suscrito={false} onClick={() => suscribir(medio)} />
					)}
				</div>
			</div>
		</div>
	);
}