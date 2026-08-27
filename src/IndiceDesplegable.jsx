export default function IndiceDesplegable({mostrar=false, close_event, titulos=[], onSeleccionar}) {
	var moscss = mostrar ? "flex " : "hidden ";

	function elegir(id) {
		onSeleccionar(id);
		close_event();
	}

	return (
		<div className={moscss+" fixed flex-col min-h-lvh min-w-screen bottom-0 h-screen justify-end z-80 p-4 gap-4 bg-[#00000033]"}>
			<button className="h-screen" onClick={close_event} />

			<div className="flex flex-col Fonts-RobotoC font-black text-2xl justify-end bg-black">
				<Item texto="[Inicio]" onClick={() => elegir("inicio")} />
				{titulos.map(t => <Item texto={t.texto} onClick={() => elegir(t.id)} />)}
			</div>
		</div>
	);
}

function Item({texto, onClick}) {
	return (
		<button onClick={onClick} className="flex gap-2 items-center min-h-12 px-3 py-3 text-left text-white btn-barra-lateral">
			<div className="h-1 w-1 hover-parent bg-white"/> {texto}
		</button>
	);
}