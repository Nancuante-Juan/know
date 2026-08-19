export default function TarjetaMedio({nombre, icono, descripcion, categorias, suscrito = false, onClick}) {
	return (
		<div className="flex flex-col w-full min-w-1/3 gap-2 border-2 p-4" style={{borderColor: "var(--gris)"}}>
			<div className="flex justify-between items-center">
				<div className="flex gap-2 items-center">
					{icono && <img src={`/${icono}`} className="h-6" />}
				</div>
				<button onClick={onClick} className="px-3 py-1 text-sm text-white" style={{backgroundColor: suscrito ? "var(--gris)" : "var(--rojo)"}}>
					{suscrito ? "− Dejar" : "+ Suscribirse"}
				</button>
			</div>
			<p className="text-gris">{descripcion}</p>
			<div className="flex flex-wrap gap-2 text-sm">
				{categorias.map(cat =>
					<div className="border-2 px-2" style={{borderColor: "var(--gris)"}}>{cat}</div>
				)}
			</div>
		</div>
	);
}