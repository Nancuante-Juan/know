export default function PortadaNoticia ({ titulo, imagen, medio, categorias, descripcion, grande = false }) {

if (grande) { return (
	<div className={"flex flex-col w-full h-106 justify-end bg-cover bg-center text-white muestra-noticia muestra-noticia-grande"} style={{backgroundImage: "url("+imagen+")",}}>
		<div className="flex flex-col w-full h-auto backdrop-blur-md muestra-noticia-fondo p-6 pt-8">
			<div>{medio + " ⋅ " + categorias}</div>
			<div className="font-black text-5xl Fonts-RobotoC muestra-noticia-titulo">{titulo}</div>
			<div>{descripcion}</div>
		</div>
	</div>
);} else { return (
	<div className={"flex flex-col w-full h-106 justify-end bg-cover bg-center text-white muestra-noticia muestra-noticia-pequena"} style={{backgroundImage: "url("+imagen+")",}}>
		<div className="flex flex-col w-full h-auto backdrop-blur-md muestra-noticia-fondo p-4 pt-8">
			<div className="hide-not-hover">{medio + " ⋅ " + categorias}</div>
			<div className="font-black text-3xl Fonts-RobotoC muestra-noticia-titulo">{titulo}</div>
			<div className="hide-not-hover">{descripcion}</div>
		</div>
	</div>
);}

}