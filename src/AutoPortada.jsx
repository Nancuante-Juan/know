import PortadaNoticia from "./PortadaNoticia";
import * as Recibir from "./Noticias";

export default function AutoPortada ({noticia, tipo=""}) { 
	if (noticia == undefined) { return; }
	const lista_nots = Recibir.noticias;

	return (
		<PortadaNoticia
			titulo={noticia.titulo}
			imagen={noticia.imagen}
			medio={noticia.medio}
			categorias={noticia.categorias}
			descripcion={noticia.descripcion}
			tipo={tipo}
			url={"/n/"+lista_nots.indexOf(noticia)}
		/>
	); 
}