import BarraNavegación from "./BarraNavegacion";
import PortadaNoticia from "./PortadaNoticia";

export default function App() { return (
<>
<BarraNavegación />
<div className="grid grid-cols-3 gap-4 p-4 pt-0 min-h-dvh bg-black">
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/react.svg"} medio="Crónica" categorias="Política" descripcion="No sé" grande={true} />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No sé" />
	<PortadaNoticia titulo="IMPORTANTE: me quede sin noticia" imagen={"src/assets/vite.svg"} medio="Crónica" categorias="Política" descripcion="No s askhdkasdfhsjkladhfkhasdjkfhlasdhjkf hjkasdhfjkahsdjkhfkjsadhjkffhkjasdhfjkhasdjkfhkjasdhkjfhsakdjhnsdfkjsdf jkashdfkjhsdjkhf sadjkfhkjasdhfk jksdhfkjasd fjasdhfkjhsadkjf jksdhfkjsa jksadhfkjasd jaksdhfkljsadh jkashdfjkhsadé" />
</div>
</>
);}