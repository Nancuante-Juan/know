import { useState } from "react";
import * as Almac from "./Almacenamiento";

const TODAS_CATEGORIAS = ["Economia", "Sociedad", "Farandula", "Política", "Deporte", "Clima", "Gaming", "Tecnologia", "Ciencia", "Vehiculos", "Policial"];

export default function ConfigCategorias() {
	const [suscritas, setSuscritas] = useState(Almac.obt_CATEGORIAS());
	const recomendadas = TODAS_CATEGORIAS.filter(cat => !suscritas.includes(cat));

	function suscribir(cat) {
		const nuevas = [...suscritas, cat];
		setSuscritas(nuevas);
		Almac.guar_CATEGORIAS(nuevas);
	}

	function desuscribir(cat) {
		const nuevas = suscritas.filter(c => c !== cat);
		setSuscritas(nuevas);
		Almac.guar_CATEGORIAS(nuevas);
	}

	return (
		<div className="flex flex-col md:flex-row text-lg w-full gap-16 trans">
			<div className="flex flex-col gap-4 w-full">
				<h1>Suscritas</h1>
				<div className="flex flex-wrap gap-2">
					{suscritas.map(cat =>
						<ChipCategoria texto={cat} suscrita={true} onClick={() => desuscribir(cat)} />
					)}
				</div>
			</div>

			<div className="flex flex-col gap-4 w-full">
				<h1>Le podría interesar</h1>
				<div className="flex flex-wrap gap-2">
					{recomendadas.map(cat =>
						<ChipCategoria texto={cat} suscrita={false} onClick={() => suscribir(cat)} />
					)}
				</div>
			</div>
		</div>
	);
}

function ChipCategoria({texto, suscrita = false, onClick}) {
	const icon = suscrita ? "-" : "+"
	const color = suscrita ? "border-[var(--gris)] text-[var(--lectura-color-texto)]" : " border-[var(--rojo)] text-[var(--rojo)]"

	return (
		<button onClick={onClick} className={"flex gap-2 items-center border-2 px-3 py-1 min-h-10 hover:bg-[#99999933] bg-(--lectura-color-fondo) "+color}>
			{texto}
			<span>{icon}</span>
		</button>
	);
}