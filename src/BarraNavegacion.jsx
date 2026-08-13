export default function BarraNavegación (/*{estado}*/) { return (
<div className="flex py-2 px-4 bg-black text-white w-full">
	<p className="Fonts-DMSerif text-4xl">Know</p>
	<div className="flex flex-row gap-4 w-full justify-end">
		<BotonBarra texto="Política" activado={true}/>
		<BotonBarra texto="Economía" />
		<BotonBarra texto="Farándula" />
		<BotonBarra texto="Entretenimiento" />
		<BotonBarra texto="Tecnología" />
		<BotonBarra texto="Policial" />
		<BotonBarra texto="Deporte" />
		<BotonBarra texto="Vida" />
		<div className="flex w-24 gap-4">
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
<div className="align-middle">
	<a href={link} className={"flex underline text-xl Fonts-Inter" + isBold}>{texto}</a>
</div>
);}