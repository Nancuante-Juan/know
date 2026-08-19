import BarraNavegación from "./BarraNavegacion";
import AutoGrid from "./AutoGrid";
import * as Recibir from "./RecibirNoticias";
import * as Almac from "./Almacenamiento";

export default function App() { 
	Recibir.reset_ya_mostrado();
	const inicio = Recibir.Filtrado("", 4);
	const cats = Almac.obt_CATEGORIAS();
	const cats_noticias = cats.map(cat =>
		<AutoGrid tipo="minicategoria" seccion={cat} lista={Recibir.Filtrado(cat, 6)}/>
	);
	
	return (
		<div className="bg-black">
			<BarraNavegación />
			
			<div className="overflow-y-auto overflow-x-hidden lg:snap-y snap-mandatory" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)",}}>
				<AutoGrid tipo="inicio" lista={inicio} invertir={true}/>
				{cats_noticias}
			</div>
		</div>
	);
}