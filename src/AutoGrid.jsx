import AutoPortada from "./AutoPortada";
import DefaultGrid from "./DefaultGrid";

export default function AutoGrid({tipo, lista, seccion, invertir=false}) {
	if (lista.length === 0) {return;}
	
	if (tipo === "inicio") { return(
	
		<DefaultGrid tipo="inicio" invertir={invertir} cara={
			<AutoPortada noticia={lista[0]} tipo="grande" />}>
			<AutoPortada noticia={lista[1]} tipo="pequeno3" />
			<AutoPortada noticia={lista[2]} tipo="pequeno3" />
			<AutoPortada noticia={lista[3]} tipo="pequeno3" />
		</DefaultGrid>
		
	); } else if (tipo === "minicategoria") { return(
	
		<DefaultGrid seccion={seccion} url={"/c/"+seccion}>
			<AutoPortada noticia={lista[0]} />
			<AutoPortada noticia={lista[1]} />
			<AutoPortada noticia={lista[2]} />
			<AutoPortada noticia={lista[3]} />
			<AutoPortada noticia={lista[4]} />
			<AutoPortada noticia={lista[5]} />
		</DefaultGrid>
		
	); }
}