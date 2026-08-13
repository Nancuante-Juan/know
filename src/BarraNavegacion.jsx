import { Link } from "react-router";

export default function BarraNavegación (/*{estado}*/) { return (
<div className="flex py-2 px-4 bg-black text-white w-full">
	<p className="Fonts-DMSerif text-4xl min-w-30">Know</p>
	<div className="flex flex-row gap-4 w-full justify-end">
		<div className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-none" style={{maxWidth: "calc(100vw - (13.5rem + 2rem + 1rem))"}}>
			<BotonBarra texto="Política" activado={true}/>
			<BotonBarra texto="Economía" />
			<BotonBarra texto="Farándula" />
			<BotonBarra texto="Entretenimiento" />
			<BotonBarra texto="Tecnología" />
			<BotonBarra texto="Policial" />
			<BotonBarra texto="Deporte" />
			<BotonBarra texto="Vida" />
		</div>
		<div className="flex min-w-24 gap-4">
			<img src="src/assets/icons/search24.svg" />
			<img src="src/assets/icons/discover_tune24.svg" />
		</div>
	</div>
	
</div>

);}

function BotonBarra ({texto, link, activado = false}) { 
var isBold = "";
if (activado) { isBold = isBold + " font-black";}

return (
	<Link to={link} className={"flex underline text-xl items-center" + isBold}>{texto}</Link>
);}