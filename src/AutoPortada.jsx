import PortadaNoticia from "./PortadaNoticia";

export default function AutoPortada ({noticia, tipo=""}) { return (
	<PortadaNoticia
		titulo={noticia.titulo}
		imagen={noticia.imagen}
		medio={noticia.medio}
		categorias={noticia.categorias}
		descripcion={noticia.descripcion}
		tipo={tipo}
	/>
); }