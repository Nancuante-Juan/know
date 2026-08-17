import { useState } from "react";
import ChipCategoria from "./ChipCategoria";
import * as Almac from "./Almacenamiento";

const TODAS_CATEGORIAS = ["Economia", "Sociedad", "Farandula", "Politica", "Deportes", "Clima", "Gaming", "Tecnologia"];

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
		<div className="flex flex-col text-lg w-full gap-8">
			<div className="flex flex-col gap-4">
				<h1>Le podría interesar</h1>
				<div className="flex flex-wrap gap-2">
					{recomendadas.map(cat =>
						<ChipCategoria texto={cat} suscrita={false} onClick={() => suscribir(cat)} />
					)}
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<h1>Suscritas</h1>
				<div className="flex flex-wrap gap-2">
					{suscritas.map(cat =>
						<ChipCategoria texto={cat} suscrita={true} onClick={() => desuscribir(cat)} />
					)}
				</div>
			</div>
		</div>
	);
}