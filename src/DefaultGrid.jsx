import DivisorSeccion from "./DivisorSeccion";

export default function DefaultGrid({children, tipo="", cara, seccion, url, invertir=false}){
	if (invertir) { invertir = "md:flex-row-reverse" } else {invertir = "md:flex-row"}
	
	if (tipo === "") { return(
	
	<div className="flex flex-col snap-center">
		<DivisorSeccion seccion={seccion} link={url} />
		<div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:p-4 lg:pt-0 ideal-height-pantalla">
			{children}
		</div>
	</div>
	
	); } else if (tipo === "inicio") { return(
	
		<div className={"flex flex-col gap-4 lg:p-4 lg:pt-0 w-full snap-center "+invertir}>
			{cara}
			<div className="flex flex-col gap-4 h-full ideal-w-noticia3 md:w-2/3 w-full">
				{children}
			</div>
		</div>
		
	); } else if (tipo === "infinite") { return(
	
		<div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:p-4 lg:pt-0">
			{children}
		</div>
		
	); }
}