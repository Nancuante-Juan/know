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
import BarraPrincipalMobile from "./BarraPrincipalMobile";
import MenuPrincipalMobile from "./MenuPrincipalMobile";
import SelectorMobile from "./SelectorMobile";
const EMOJIS = ["👍", "❤️", "😮", "😡", "😢", "😮‍💨", "🗣️", "🔥"];

export default function Noticia () {
	const params = useParams();
	const id = params.noti;
	const NOTI_INFO = Recibir.noticias[id];

	const [text, setText] = useState(null);
	const [lectura, setLectura] = useState(Almac.obt_LECTURA);
	function update_lectura() {setLectura(Almac.obt_LECTURA)};

	const [conteos, setConteos] = useState({});
	const [reaccionActiva, setReaccionActiva] = useState(undefined);

	const [panel_mostrar, setPanel_mostrar] = useState(false);
	function ocultar_panel() { setPanel_mostrar(false); }
	


	//////// MENU /////////////
	const [menu_mostrar, setMenu_mostrar] = useState(false);
	function ocultar() { setMenu_mostrar(false); }
	const [selector_mostrar, setSelector_mostrar] = useState(false);
	function ocultar_selector() { setSelector_mostrar(false); }

	const ruta = decodeURI(useLocation().pathname);
	const [prev_ruta, setPrev_ruta] = useState(ruta);
	if (ruta != prev_ruta){
		setPrev_ruta(ruta);
		setMenu_mostrar(false);
		setPanel_mostrar(false);
		setSelector_mostrar(false);
		const collection_trans = document.getElementsByClassName("trans");
		for (let i = 0; i < collection_trans.length; i++) {
			collection_trans[i].animate([{opacity:0},{opacity:1}],{duration: 200}).play();
		}
	}


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

	useEffect(() => {
		const nuevosConteos = {};
		EMOJIS.forEach(e => { nuevosConteos[e] = Math.floor(Math.random() * 10); });
		setConteos(nuevosConteos);
		setReaccionActiva(Almac.obt_REACCION(id));
	}, [id]);

	function reaccionar(emoji) {
		const nueva = Almac.guar_REACCION(id, emoji);
		setReaccionActiva(nueva);
	}
	
	Filter.reset_ya_mostrado();
	Filter.ya_mostrado.push(NOTI_INFO.id);
	
	return (
		<div className="bg-black">
			<BarraNavegación />
			<div className="flex flex-col w-screen h-[64svh] md:h-[74svh] bg-cover text-white justify-end bg-center trans select-text" style={{backgroundImage: "url("+`/${NOTI_INFO.imagen}`+")"}}>
				<div className="flex w-full h-auto muestra-noticia-fondo p-4 z-5 gap-4 items-end">
					<div className="font-black text-6xl Fonts-RobotoC muestra-noticia-titulo w-fit bg-amarillo">{NOTI_INFO.titulo}</div>
					<div className="hidden md:block">{NOTI_INFO.descripcion}</div>
				</div>
				<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
			</div>
			
			<div className="flex flex-row bg-repeat min-h-[30vh] trans" style={{backgroundColor: "var(--lectura-color-fondo)", backgroundImage: "var(--lectura-ruido)"}}>
				{lectura.anchoPag !== 100 ? <div className="sticky h-full top-0 max-h-screen hidden md:flex w-full noticia n-barra-lateral n-bl-izquierda">



					{/* ACA VA EL INDICE DE LA NOTICIA */}



					{lectura.anchoPag < 70 ? /* si el ancho de la noticia es demasiado pequeño o la ventana lo es el botono se muestra a la izquierda */
					<button className="p-4 hidden md:flex xl:hidden" onClick={e => setPanel_mostrar(true)}>
						<img className="h-8" src={`/${"src/assets/icons/styles24.svg"}`}/>
					</button> : 
					<button className="p-4 hidden md:flex" onClick={e => setPanel_mostrar(true)}>
						<img className="h-8" src={`/${"src/assets/icons/styles24.svg"}`}/>
					</button>
					}
					
				</div> : <></>}
				
				<div className="p-4 select-text w-full NOTICIA_CONTENT noticia n-medio">
					<div className="md:hidden Fonts-RobotoC italic ignore-noticia descripcion">{NOTI_INFO.descripcion}</div>

					<div className=" ignore-noticia medio">{NOTI_INFO.medio + " ⋅ " + NOTI_INFO.categorias.toString().replaceAll(",", " ⋅ ")}</div>
					
					{text}
				</div>
				
				{lectura.anchoPag < 70 ? <div className="sticky h-fit top-0 w-full hidden xl:flex justify-end noticia n-barra-lateral n-bl-derecha">
					<button className="p-4" onClick={e => setPanel_mostrar(true)}>
						<img className="h-8" src={`/${"src/assets/icons/styles24.svg"}`}/>
					</button>
				</div> : <></>}

				{lectura.anchoPag == 100 ?
					<div className="hidden md:flex fixed p-4 gap-2 bottom-0 w-120 max-w-screen z-10">
						<button className="p-2 w-full bg-black text-white text-2xl Fonts-RobotoC font-black min-h-12" onClick={e => setSelector_mostrar(true)}>
							- [Inicio]
						</button>
						<button className="p-2 bg-black" onClick={e => setPanel_mostrar(true)}>
							<img src={`/${"src/assets/icons/styles_white24.svg"}`} alt="Menú" className="min-h-8 min-w-8" />
						</button>
					</div>
				: <></>}
			</div>

			<div className="flex flex-col max-w-screen bg-black text-white">
				<div className="flex flex-wrap justify-center gap-2 p-2">
					{EMOJIS.map(e =>
						<Reacciones emoji={e} cuenta={conteos[e] ?? 0} activado={reaccionActiva === e} onClick={() => reaccionar(e)} />
					)}
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
				<div className="min-h-40 md:min-h-12" />
			</div>
			
			<PersonalizarLectura mostrar={panel_mostrar} ocultar={ocultar_panel} update={update_lectura}/>
						
			<BarraPrincipalMobile>
				<button className="p-2 w-full bg-black text-white text-2xl Fonts-RobotoC font-black min-h-12" onClick={e => setSelector_mostrar(true)}>
					- [Inicio]
				</button>
				<button className="p-2 bg-black" onClick={e => setPanel_mostrar(true)}>
					<img src={`/${"src/assets/icons/styles_white24.svg"}`} alt="Menú" className="min-h-8 min-w-8" />
				</button>
				<button className="block md:hidden p-2 bg-black" onClick={e => setMenu_mostrar(true)}>
					<img src={`/${"src/assets/icons/menu24.svg"}`} alt="Menú" className="min-h-8 min-w-8" />
				</button>
			</BarraPrincipalMobile>
			<MenuPrincipalMobile mostrar={menu_mostrar} close_event={ocultar} />
			<SelectorMobile mostrar={selector_mostrar} close_event={ocultar_selector} 
					lista={["[Inicio]", "titulo 1", "titulo2"]} 
					urls={["/", "/", "/"]}  
			too_small=""/> {/*el indice tambien va aca en el selectir*/}

		</div>
	);
}



function Reacciones ({emoji="", cuenta=0, activado=false, onClick}) {
    const pulscss = activado ? "line-rojo text-rojo" : "line-gris text-gris";
    const pulsnum = activado ? 1 : 0;

    return (
        <button className={"px-2 py-1 min-w-24 hover:bg-zinc-700 text-xl "+pulscss} onClick={onClick} style={{textAlign:"center"}}>
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