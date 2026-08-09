import PortadaNoticia from "./PortadaNoticia";

export default function App() {return(
<div className="grid grid-cols-3">
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" grande={true} />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	
</div>
);}