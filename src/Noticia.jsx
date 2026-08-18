import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import BarraNavegación from "./BarraNavegacion";
import * as Recibir from "./Noticias";
import PersonalizarLectura from "./PersonalizarLecturaPopup";
import * as Almac from "./Almacenamiento";

export default function Noticia () {
	const params = useParams();
	const id = params.noti;
	const NOTI_INFO = Recibir.noticias[id];

	const [text, setText] = useState(null);
	
	
	async function get_text(id){
		const module = await import(`./assets/noticias/${id}.jsx`);
		console.log(module);
		const text = module.Devolver();
		return (text);
	}
	
	useEffect(() => {
		let ignore = false;
		get_text(id).then(r => {
			if (!ignore) {
				setText(r);
			}
		});
		
		return () => {
			ignore = true;
		};
	}, [id]);
	
	
	
	return (
		<div className="overflow-x-hidden">
			<BarraNavegación />
			<div className="flex flex-col w-screen h-[80vh] bg-cover text-white justify-end bg-center" style={Almac.obt_LECTURA().verImagenes ? {backgroundImage: "url("+`/${NOTI_INFO.imagen}`+")"} : {}}>
				<div className="flex w-full h-auto muestra-noticia-fondo p-6 z-5 gap-4 items-end">
					<div className="font-black text-6xl Fonts-RobotoC muestra-noticia-titulo w-fit bg-amarillo">{NOTI_INFO.titulo}</div>
					<div className="hidden md:block">{NOTI_INFO.descripcion}</div>
				</div>
				<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
			</div>
			
			<div className="flex flex-row" style={{backgroundColor: "var(--lectura-color-fondo)"}}>
				<div className="w-full sticky h-full max-h-screen hidden lg:flex">
					
				</div>
				
				<div className="w-1000 select-text NOTICIA_CONTENT">
					<div>{NOTI_INFO.medio + " ⋅ " + NOTI_INFO.categorias}</div>
					<div className="md:hidden">{NOTI_INFO.descripcion}</div>
					
					{text}
					
				</div>
				
				<div className="w-full sticky top-0 h-fit hidden xl:flex justify-end">
					<img className="h-16 p-4" src={`/${"src/assets/icons/styles24.svg"}`}/>
				</div>
			</div>
			
			<PersonalizarLectura />
		</div>
	);
}

