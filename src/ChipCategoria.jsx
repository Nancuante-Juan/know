export default function ChipCategoria({texto, suscrita = false, onClick}) {
	if (suscrita) { return (
		<button onClick={onClick} className="flex gap-2 items-center border-2 px-3 py-1" style={{borderColor: "var(--gris)"}}>
			{texto}
			<span style={{color: "var(--rojo)"}}>−</span>
		</button>
	); } else { return (
		<button onClick={onClick} className="flex gap-2 items-center border-2 px-3 py-1" style={{borderColor: "var(--rojo)", color: "var(--rojo)"}}>
			{texto}
			<span>+</span>
		</button>
	); }
}