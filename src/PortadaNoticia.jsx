import { Link } from "react-router";
import * as Almac from "./Almacenamiento";

export default function PortadaNoticia ({ titulo, imagen, medio, categorias, descripcion, tipo="", url }) {
	imagen = `/${imagen}`
	categorias = categorias.toString().replace(",", " ⋅ ")
	const estiloFondo = {backgroundImage: "url("+imagen+")"};
	
	if (tipo==="grande") { return (
	
		<Link className="flex flex-col w-full min-h-full justify-end overflow-hidden bg-center text-white muestra-noticia muestra-noticia-grande imagen-noticia" style={estiloFondo} to={url} reloadDocument>
			<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-6 z-5 gap-2">
				<div className="truncate">{medio + " ⋅ " + categorias}</div>
				<div className="font-black text-6xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
				<div>{descripcion}</div>
			</div>
			<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
		</Link>
	
	);} else if (tipo === "pequeno3") { return (
	
		<Link className="flex flex-col w-full ideal-h-noticia-3 justify-end overflow-hidden bg-center text-white muestra-noticia muestra-noticia-pequena imagen-noticia" style={estiloFondo} to={url} reloadDocument>
		
			<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-4 z-5 gap-2">
				<div className="hide-not-hover truncate">{medio + " ⋅ " + categorias}</div>
				<div className="font-black text-3xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
				<div className="hide-not-hover">{descripcion}</div>
			</div>
			<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia-3" /></div>
			
		</Link>
	
	);} else { return (
	
		<Link className="flex flex-col w-full ideal-h-noticia justify-end overflow-hidden bg-center text-white muestra-noticia muestra-noticia-pequena imagen-noticia" style={estiloFondo} to={url} reloadDocument>
		
			<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-4 z-5 gap-2">
				<div className="hide-not-hover truncate">{medio + " ⋅ " + categorias}</div>
				<div className="font-black text-3xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
				<div className="hide-not-hover">{descripcion}</div>
			</div>
			<div className="flex flex-col w-full max-h-0 justify-end"><div className="-m-1 desenfoque-prog ideal-h-noticia" style={{width: "calc(100% + 1rem)"}}/></div>
			
		</Link>
	
	);}
}