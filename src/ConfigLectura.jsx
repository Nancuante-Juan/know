import Slider from "./Slider";

export default function ConfigLectura() { return(
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

			<Slider nombre="Tamaño de texto" min={0.5} max={2} step={0.25}/>
			<Slider nombre="Espaciado entre líneas" min={0.75} max={1.75} step={0.25}/>
			<Slider nombre="Espacio entre caractéres" append="%" min={80} max={120} step={20}/>
			<Slider nombre="Espacio entre palabras" append="%" min={80} max={120} step={20}/>
			<Slider nombre="Ancho de página" append="%" min={40} max={100} step={20}/>
			
			<div className="flex gap-2 items-center max-w-120 w-full min-w-1/2">
				<input type="checkbox" id="Ver imgs"/>
				<label className="w-full" for="Ver imgs">Ver imágenes</label>
			</div>
		</div>

		<div className="flex flex-col gap-2">
			<h1 className="pt-8">Colores</h1>
			
			<div className="flex gap-2 items-center">
				<input type="color" id="Color texto"/>
				<label className="w-full" for="Color texto">Texto</label>
			</div>
			
			<div className="flex gap-2 items-center">
				<input type="color" id="Color fondo"/>
				<label className="w-full" for="Color fondo">Fondo</label>
			</div>
			
			<div className="flex gap-2 items-center">
				<input type="color" id="Color resaltado"/>
				<label className="w-full" for="Color resaltado">Resaltado</label>
			</div>
			
			<div className="flex gap-2 items-center">
				<input type="checkbox" id="Fondo papel"/>
				<label className="w-full" for="Fondo papel">Fondo con textura</label>
			</div>
		</div>
	</div>
);}