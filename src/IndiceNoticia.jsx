export default function IndiceNoticia({titulos = [], activo, onSeleccionar}) {
	return (
		<div className="flex flex-col">
			<ItemIndice texto="[Inicio]" seleccionado={activo === "inicio"} onClick={() => onSeleccionar("inicio")} />
			{titulos.map(t =>
				<ItemIndice texto={t.texto} seleccionado={activo === t.id} onClick={() => onSeleccionar(t.id)} />
			)}
		</div>
	);
}

function ItemIndice({texto, seleccionado, onClick}) {
	const parentcss = seleccionado ? "bg-(--rojo) text-white" : "hover:bg-(--rojo) hover:text-white";
	const barcss    = seleccionado ? "w-6 bg-white" : "w-1 bg-(--gris) group-hover:w-6 group-hover:bg-white";
	return (
		<button onClick={onClick} className={"group flex gap-2 items-center px-2 py-2 text-sm text-left truncate max-w-48 "+parentcss}>
			<div className={"h-1 shrink-0 transition-all duration-200 "+barcss}/>
			{texto}
		</button>
	);
}