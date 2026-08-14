export default function PortadaNoticia ({ titulo, imagen, medio, categorias, descripcion, tipo="" }) {
if (tipo==="grande") { return (

<div className="flex flex-col w-full min-h-full justify-end overflow-hidden bg-cover bg-center text-white muestra-noticia muestra-noticia-grande" style={{backgroundImage: "url("+imagen+")", }}>
	<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-6 pt-8 z-5 gap-2">
		<div>{medio + " ⋅ " + categorias}</div>
		<div className="font-black text-6xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
		<div>{descripcion}</div>
	</div>
	<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
</div>

);} else if (tipo === "pequeno3") { return (

<div className="flex flex-col w-full ideal-h-noticia-3 justify-end overflow-hidden bg-cover bg-center text-white muestra-noticia muestra-noticia-pequena" style={{backgroundImage: "url("+imagen+")",}}>

	<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-4 pt-8 z-5 gap-2">
		<div className="hide-not-hover">{medio + " ⋅ " + categorias}</div>
		<div className="font-black text-3xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
		<div className="hide-not-hover">{descripcion}</div>
	</div>
	<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia-3" /></div>
	
</div>

);} else { return (

<div className="flex flex-col w-full ideal-h-noticia justify-end overflow-hidden bg-cover bg-center text-white muestra-noticia muestra-noticia-pequena" style={{backgroundImage: "url("+imagen+")",}}>

	<div className="flex flex-col w-full h-auto muestra-noticia-fondo p-4 pt-8 z-5 gap-2">
		<div className="hide-not-hover">{medio + " ⋅ " + categorias}</div>
		<div className="font-black text-3xl Fonts-RobotoC muestra-noticia-titulo w-fit">{titulo}</div>
		<div className="hide-not-hover">{descripcion}</div>
	</div>
	<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog w-full ideal-h-noticia" /></div>
	
</div>

);}

}