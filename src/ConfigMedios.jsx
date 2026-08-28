import { useState } from "react";
import * as Almac from "./Almacenamiento";

const INFO_MEDIOS = {
	"Tiempo Sur":    { icono: "src/assets/icons/iconos_medios/Tiemposur-logo.webp", descripcion: "Información actualizada minuto a minuto las 24 horas.", categorias: ["Policiales", "Sociedad", "Politica"] },
	"Olé":           { icono: "src/assets/icons/iconos_medios/Ole-logo.png", descripcion: "Noticias deportivas de Argentina y el mundo.", categorias: ["Deportes"] },
	"Crónica":       { icono: "src/assets/icons/iconos_medios/Cronica-logo.png", descripcion: "Últimas noticias de Neuquén, Río Negro y la Patagonia Argentina.", categorias: ["Policiales", "Politica", "Sociedad", "Salud"] },
	"TyC Sports":    { icono: "src/assets/icons/iconos_medios/Tycsports-logo.png", descripcion: "Toda la información sobre fútbol, básquet y el resto de las disciplinas.", categorias: ["Deportes"] },
	"La Nación":     { icono: "src/assets/icons/iconos_medios/LaNacion.svg", descripcion: "Las últimas noticias de la Argentina y del mundo en tiempo real.", categorias: ["Economia", "Sociedad", "Farandula", "Politica", "Deportes"] },
	"CNN":           { icono: "src/assets/icons/iconos_medios/CNN-logo.png", descripcion: "Cobertura internacional en español, con foco en ciencia, tecnología y grandes historias globales.", categorias: ["Ciencia", "Tecnologia", "Deporte"] },
	"NuevoDia":      { icono: "src/assets/icons/iconos_medios/NuevoDia-logo.png", descripcion: "El diario de Río Gallegos con la actualidad deportiva y el clima de la región.", categorias: ["Deporte", "Clima"] },
	"Levelup":       { icono: "src/assets/icons/iconos_medios/Levelup-logo.png", descripcion: "Ofertas, lanzamientos y novedades del mundo de los videojuegos.", categorias: ["Gaming"] },
	"TN":            { icono: "src/assets/icons/iconos_medios/TN-logo.png", descripcion: "Todo Noticias: la actualidad política, económica y social de Argentina, minuto a minuto.", categorias: ["Politica", "Economia", "Sociedad"] },
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
		<div className="flex flex-col text-lg w-full gap-16 md:grid md:grid-cols-2 trans">
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

function TarjetaMedio({nombre, icono, descripcion, categorias, suscrito = false, onClick}) {
	return (
		<button onClick={onClick} className="flex flex-col w-full min-w-1/3 gap-2 border-2 p-4 bg-(--lectura-color-fondo) hover:bg-[#99999933]" style={{borderColor: "var(--gris)"}}>
			<div className="flex justify-between items-center gap-2">
				<div className="flex gap-2 items-center min-w-0 bg-white p-2">
					{icono && <img src={`/${icono}`} className="max-h-6 max-w-45 object-contain" />}
				</div>
				<div className="px-3 py-1 text-md text-white shrink-0" style={{backgroundColor: suscrito ? "var(--gris)" : "var(--rojo)"}}>
					{suscrito ? "− Dejar" : "+ Suscribirse"}
				</div>
			</div>
			<p className="">{descripcion}</p>
			<div className="text-gris text-sm" >{categorias.toString().replaceAll(",", " ⋅ ")}</div>
		</button>
	);
}