import { useState } from "react";
import Slider from "./Slider";
import * as Almac from "./Almacenamiento";

export default function ConfigLectura() {
	const [lectura, setLectura] = useState(Almac.obt_LECTURA());

	function actualizar(campo, valor) {
		const nueva = { ...lectura, [campo]: valor };
		setLectura(nueva);
		Almac.guar_LECTURA(nueva);
	}

	return(
		<div className="flex flex-col text-lg w-full">
			<h1>Texto</h1>
			<div className="flex gap-y-4 gap-x-16 flex-wrap">
				<div className="flex flex-col max-w-120 w-full min-w-1/3">
					Tipografía:
					<div className="flex gap-4">
						<select>
							<option>Inter</option>
						</select>
						<select>
							<option>Regular</option>
						</select>
					</div>
				</div>

				<Slider nombre="Tamaño de texto" min={0.5} max={2} step={0.25} value={lectura.tamano} onChange={e => actualizar("tamano", Number(e.target.value))}/>
				<Slider nombre="Espaciado entre líneas" min={0.75} max={1.75} step={0.25} value={lectura.interlineado} onChange={e => actualizar("interlineado", Number(e.target.value))}/>
				<Slider nombre="Espacio entre caractéres" append="%" min={80} max={120} step={20} value={lectura.espCaracteres} onChange={e => actualizar("espCaracteres", Number(e.target.value))}/>
				<Slider nombre="Espacio entre palabras" append="%" min={80} max={120} step={20} value={lectura.espPalabras} onChange={e => actualizar("espPalabras", Number(e.target.value))}/>
				<Slider nombre="Ancho de página" append="%" min={40} max={100} step={20}/>
				
				<div className="flex gap-2 items-center max-w-120 w-full min-w-1/2">
					<input type="checkbox" id="Ver imgs" checked={lectura.verImagenes} onChange={e => actualizar("verImagenes", e.target.checked)}/>
					<label className="w-full" for="Ver imgs">Ver imágenes</label>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h1 className="pt-8">Colores</h1>
				
				<div className="flex gap-2 items-center">
					<input type="color" id="Color texto" value={lectura.colorTexto} onChange={e => actualizar("colorTexto", e.target.value)}/>
					<label className="w-full" for="Color texto">Texto</label>
				</div>
				
				<div className="flex gap-2 items-center">
					<input type="color" id="Color fondo" value={lectura.colorFondo} onChange={e => actualizar("colorFondo", e.target.value)}/>
					<label className="w-full" for="Color fondo">Fondo</label>
				</div>
				
				<div className="flex gap-2 items-center">
					<input type="checkbox" id="Fondo papel"/>
					<label className="w-full" for="Fondo papel">Fondo con textura</label>
				</div>
			</div>
		</div>
	);
}