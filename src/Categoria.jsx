import { useParams } from "react-router";
import BarraNavegación from "./BarraNavegacion";
import AutoGrid from "./AutoGrid";
import * as Recibir from "./RecibirNoticias";
import DefaultGrid from "./DefaultGrid";
import AutoPortada from "./AutoPortada";

export default function Categoria(){
	const params = useParams();
	const categoria_dominante = params.cat;	
	const lista_noticias = Recibir.Filtrado(categoria_dominante);
	const noticias = lista_noticias.slice(4).map(not =>
		<AutoPortada noticia={not} />
	);
	
	return (
		<div className="bg-black">
			<BarraNavegación />
			
			<div className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)",}}>
				<div className="flex flex-col text-8xl text-white Fonts-DMSerif w-full max-h-0 md:ml-4 ancho-de-noticia-grande">
					<div className="flex flex-col w-full max-h-0"><div className="desenfoque-prog -scale-100 w-full min-h-50" /></div>
					<p className="z-5 p-4">{categoria_dominante}</p>
				</div>
				<AutoGrid tipo="inicio" lista={Recibir.Filtrado(categoria_dominante, 4)}/>
				<DefaultGrid tipo="infinite">{noticias}</DefaultGrid>
			</div>
		</div>
	);
}