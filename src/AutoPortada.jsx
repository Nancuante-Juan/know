import PortadaNoticia from "./PortadaNoticia";

export default function AutoPortada ({noticia, tipo=""}) { 
	if (noticia == undefined) { return; }

	return (
		<PortadaNoticia
			titulo={noticia.titulo}
			imagen={noticia.imagen}
			medio={noticia.medio}
			categorias={noticia.categorias}
			descripcion={noticia.descripcion}
			tipo={tipo}
			url={"/n/"+noticia.id}
		/>
	); 
}