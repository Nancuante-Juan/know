import { useParams } from "react-router";
import BarraNavegación from "./BarraNavegacion";
import AutoGrid from "./AutoGrid";
import * as Recibir from "./RecibirNoticias";
import DefaultGrid from "./DefaultGrid";
import AutoPortada from "./AutoPortada";

export default function Categoria(){
	const params = useParams();
	const categoria_dominante = params.cat;	
	Recibir.reset_ya_mostrado();
	const lista_noticias = Recibir.Filtrado(categoria_dominante);
	const noticias = lista_noticias.slice(4).map(not =>
		<AutoPortada noticia={not} />
	);

	function grilla_no_noticias() { 
		if (noticias.length > 3) { return (
			<DefaultGrid tipo="infinite">{noticias}</DefaultGrid>
		);} else { return; }
	}
	
	return (
		<div className="bg-black">
			<BarraNavegación />
			
			<div className="overflow-y-auto overflow-x-hidden trans" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)",}}>
				<AutoGrid tipo="inicio" lista={lista_noticias.slice(0,4)} dentro={nombre_categoria(categoria_dominante)}/>
				{grilla_no_noticias()}
			</div>
			<script>

			</script>
		</div>
	);
}

function nombre_categoria(categoria_dominante) { return (
	<div className="flex flex-col text-8xl text-white Fonts-DMSerif w-full h-full">
		<div className="flex flex-col w-full max-h-0"> 
			<div className="desenfoque-prog -scale-100 min-w-[100%+16px] min-h-50 -m-2px"></div>
		</div>
		<p className="z-5 p-4">{categoria_dominante}</p>
	</div>
); }