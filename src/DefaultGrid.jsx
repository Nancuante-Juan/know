import DivisorSeccion from "./DivisorSeccion";

export default function DefaultGrid({children, tipo="", cara, seccion, url}){
if (tipo === "") { return(

<div className="flex flex-col snap-center">
	<DivisorSeccion seccion={seccion} link={url} />
	<div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:p-4 md:pt-0 ideal-height-pantalla" /*style={{ maxHeight: "calc(100vh - 52px - 52px)", minHeight: "calc(100vh - 52px - 52px)"}}*/>
		{children}
	</div>
</div>

); } else if (tipo === "inicio") { return(

	<div className="flex gap-4 md:p-4 md:pt-0 w-full snap-center" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)"}}>
		{cara}
		<div className="flex flex-col gap-4 h-full" style={{maxWidth: "calc((100vh - 52px - 2rem - 1rem) / 16 * 9)",minWidth: "calc((100vh - 52px - 2rem - 1rem) / 16 * 9)"}}>
			{children}
		</div>
	</div>
	
); } else if (tipo === "infinite") { return(

	<div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:p-4 md:pt-0" /*style={{ maxHeight: "calc(100vh - 52px - 52px)", minHeight: "calc(100vh - 52px - 52px)"}}*/>
		{children}
	</div>
	
); }
}