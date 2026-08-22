import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import * as Recibir from "./Noticias";
import * as Filter from "./RecibirNoticias";
import * as Almac from "./Almacenamiento";
import BarraNavegación from "./BarraNavegacion";
import PersonalizarLectura from "./PersonalizarLecturaPopup";
import DivisorSeccion from "./DivisorSeccion";
import AutoGrid from "./AutoGrid";



export default function Noticia () {
	const params = useParams();
	const id = params.noti;
	const NOTI_INFO = Recibir.noticias[id];

	const [text, setText] = useState(null);
	
	const [panel_mostrar, setPanel_mostrar] = useState(false);

	function ocultar() { setPanel_mostrar(false); }
	
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
	
	Filter.reset_ya_mostrado();
	Filter.ya_mostrado.push(NOTI_INFO.id);
	
	return (
		<div className="overflow-x-hidden bg-black">
			<BarraNavegación />
			<div className="flex flex-col w-screen h-[80vh] bg-cover text-white justify-end bg-center trans" style={{backgroundImage: "url("+`/${NOTI_INFO.imagen}`+")"}}>
				<div className="flex w-full h-auto muestra-noticia-fondo p-6 z-5 gap-4 items-end">
					<div className="font-black text-6xl Fonts-RobotoC muestra-noticia-titulo w-fit bg-amarillo">{NOTI_INFO.titulo}</div>
					<div className="hidden md:block">{NOTI_INFO.descripcion}</div>
				</div>
				<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
			</div>
			
			<div className="flex flex-row bg-repeat min-h-[20vh] trans" style={{backgroundColor: "var(--lectura-color-fondo)", backgroundImage: "var(--lectura-ruido)"}}>
				<div className="sticky h-full top-0 max-h-screen noticia n-barra-lateral n-bl-izquierda">
					
				</div>
				
				<div className="p-4 select-text NOTICIA_CONTENT noticia n-medio">
					<div>{NOTI_INFO.medio + " ⋅ " + NOTI_INFO.categorias.toString().replace(",", " ⋅ ")}</div>
					<div className="md:hidden">{NOTI_INFO.descripcion}</div>
					
					{text}
				</div>
				
				<div className="sticky h-fit top-0 justify-end noticia n-barra-lateral n-bl-derecha">
					<button className="p-4" onClick={e => setPanel_mostrar(true)}>
						<img className="h-8" src={`/${"src/assets/icons/styles24.svg"}`}/>
					</button>
				</div>	
			</div>

			<div className="flex flex-col max-w-screen bg-black text-white">
				<div className="flex flex-wrap justify-center gap-2 p-2">
					<Reacciones emoji="👍" cuenta={5} />
					<Reacciones emoji="❤️" cuenta={8} />
					<Reacciones emoji="😮" cuenta={9} />
					<Reacciones emoji="😡" cuenta={1} />
					<Reacciones emoji="😢" cuenta={8} />
					<Reacciones emoji="😮‍💨" cuenta={1} />
					<Reacciones emoji="🗣️" cuenta={0} />
					<Reacciones emoji="🔥" cuenta={2} />
					
				</div>

				<h1 className="w-full px-4 py-1.5 Fonts-DMSerif text-4xl"> Comentarios (6) </h1>
				<div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 pt-0">
					<Comentario nombre="Miguel" comentario="HOla" />
					<Comentario nombre="Jorgiño" comentario="我喜欢香肠面包" />
					<Comentario nombre="XxEnriqu3xX" comentario="mi secreto en la bio " />
					<Comentario nombre="Trolenzo" comentario="Link para robux gratis -> robuxgratis99realnofake.org" />
					<Comentario nombre="Miguel" comentario="lil bro realmente hizo una p[agina" />
					<Comentario nombre="Olm0mazos_Max1" comentario="tiki... tiki" />
				</div>
				<AutoGrid tipo="minicategoria" seccion={NOTI_INFO.categorias[0]} lista={Filter.Filtrado(NOTI_INFO.categorias[0], 6)}/>
			</div>
			
			<PersonalizarLectura mostrar={panel_mostrar} ocultar={ocultar} />

		</div>
	);
}



function Reacciones ({emoji="", cuenta=0}) {
    const [pulsado, setPulsado] = useState(false);
    const pulscss = pulsado ? "line-rojo text-rojo" : "line-gris text-gris";
    const pulsnum = pulsado ? 1 : 0;

    return (
        <button className={"px-2 py-1 min-w-24 hover:bg-zinc-700 text-xl "+pulscss} onClick={e => setPulsado(!pulsado)} style={{textAlign:"center"}}>
            {emoji} {cuenta + pulsnum}
        </button>
    );
}

function Comentario ({nombre, comentario}){
	return (
		<div className="flex flex-col w-full h-min bg-zinc-800 p-4">
			<p className="text-2xl Fonts-RobotoC font-black">{"- "+nombre}</p>	
			{comentario}
		</div>
	);
}