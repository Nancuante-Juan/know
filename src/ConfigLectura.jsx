import { useState } from "react";
import Slider from "./Slider";
import * as Almac from "./Almacenamiento";

export default function ConfigLectura({completo = false}) {
	const [lectura, setLectura] = useState(Almac.obt_LECTURA());

	function actualizar(campo, valor) {
		const nueva = { ...lectura, [campo]: valor };
		setLectura(nueva);
		Almac.guar_LECTURA(nueva);
	}
	function restablecerColores() {
		const nueva = { ...lectura, colorTexto: "#000000", colorFondo: "#ffffff" };
		setLectura(nueva);
		Almac.guar_LECTURA(nueva);
	}
	function invertirColores() {
		const nueva = { ...lectura, colorTexto: lectura.colorFondo, colorFondo: lectura.colorTexto };
		setLectura(nueva);
		Almac.guar_LECTURA(nueva);
	}
	function restablecerTexto() {
		const nueva = { ...lectura,
			fuente: "Inter",
			tamano: 1,
			interlineado: 1.75,
			espCaracteres: 100,
			espPalabras: 100,
			anchoPag: 60,
			verImagenes: true 
		};
		setLectura(nueva);
		Almac.guar_LECTURA(nueva);
	}

	if (completo) { completo = " md:grid md:grid-cols-2"}
	else {completo = ""}

	return(
		<div className="flex flex-col text-lg w-full trans">
			<div className="flex justify-between items-center">
				<h1>Texto</h1>
				<button onClick={restablecerTexto} className="bg-amarillo px-4 py-2 w-fit flex flex-row gap-2"> 
					<img src={`/${"src/assets/icons/reset24.svg"}`}/>
					Restablecer
				</button>
			</div>
			<div className={"flex flex-col gap-y-4 gap-x-16" + completo}>
				<div className="flex flex-col w-full min-w-1/3">
					Tipografía:
					<div className="flex gap-4">
						<select value={lectura.fuente} onChange={e => actualizar("fuente", e.target.value)}>
							<option value="Inter"     >Inter</option>
							<option value="Lexend"    >Lexend</option>
							<option value="Lora"      >Lora</option>
							<option value="Montserrat">Montserrat</option>
							<option value="Noto Serif">Noto Serif</option>
							<option value="Roboto"    >Roboto</option>
						</select>
					</div>
				</div>

				<Slider nombre="Tamaño de texto" min={0.75} max={2} step={0.25} value={lectura.tamano} onChange={e => actualizar("tamano", Number(e.target.value))}/>
				
				<Slider nombre="Espaciado entre líneas" min={1.25} max={2.5} step={0.25} value={lectura.interlineado} onChange={e => actualizar("interlineado", Number(e.target.value))}/>

				<Slider nombre="Espaciado entre caractéres" append="%" min={80} max={200} step={20} value={lectura.espCaracteres} onChange={e => actualizar("espCaracteres", Number(e.target.value))}/>
				
				<Slider nombre="Espacio entre palabras" append="%" min={100} max={300} step={40} value={lectura.espPalabras} onChange={e => actualizar("espPalabras", Number(e.target.value))}/>
				
				<Slider nombre="Ancho de página" append="%" min={40} max={100} step={20} value={lectura.anchoPag} onChange={e => actualizar("anchoPag", Number(e.target.value))}/>
				
				<div className="flex gap-2 items-center max-w-120 w-full min-w-1/2">
				
					<input type="checkbox" id="Ver imgs" checked={lectura.verImagenes} onChange={e => actualizar("verImagenes", e.target.checked)}/>
					<label className="w-full" for="Ver imgs">Ver imágenes</label>
					
				</div>
				
			</div>

			<div className="flex justify-between items-center pt-8 ">
				<h1>Colores</h1>
				<div className="flex gap-2">
					<button onClick={invertirColores} className="text-[0rem] md:text-lg md:gap-2 bg-black text-white px-4 py-2 w-fit flex flex-row">
						<img src={`/${"src/assets/icons/swap24.svg"}`}/>
						Invertir
					</button>
					<button onClick={restablecerColores} className="text-[0rem] md:text-lg md:gap-2 bg-amarillo px-4 py-2 w-fit flex flex-row">
						<img src={`/${"src/assets/icons/reset_colors24.svg"}`}/>
						Restablecer
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-2 pt-2">
				<div className="flex gap-2 items-center">
					<input type="color" id="Color texto" value={lectura.colorTexto} onChange={e => actualizar("colorTexto", e.target.value)}/>
					<label className="w-full" for="Color texto">Texto</label>
				</div>
				
				<div className="flex gap-2 items-center">
					<input type="color" id="Color fondo" value={lectura.colorFondo} onChange={e => actualizar("colorFondo", e.target.value)}/>
					<label className="w-full" for="Color fondo">Fondo</label>
				</div>
				
				<div className="flex gap-2 items-center">
					<input type="checkbox" id="Fondo papel" checked={lectura.fondoTextura} onChange={e => actualizar("fondoTextura", e.target.checked)}/>
					<label className="w-full" for="Fondo papel">Fondo con textura</label>
				</div>
			</div>
		</div>
	);
}