import ConfigLectura from "./ConfigLectura";
import Nots from "./Noticia";

export default function PersonalizarLecturaPopup({mostrar = false, ocultar}) {
	if (mostrar){mostrar = "fixed"}
	else {mostrar = "hidden"}
	return (
		<button className={"fixed top-0 right-0 w-screen h-screen p-4 flex justify-end bg-[#00000099] z-25 "+mostrar} onClick={ocultar}>
			<div className="flex flex-col w-132 bg-white ow-the-edge z-20 overflow-x-hidden overflow-y-auto" style={{minHeight: "calc(100vh - 2rem)", maxHeight: "calc(100vh - 2rem)", maxWidth: "calc(100vw - 2rem)"}}>
				<div className="flex justify-between items-center h-fit w-full sticky bg-white top-0 p-8">
					<p className="text-4xl Fonts-RobotoC font-black">PERSONALIZACIÓN</p>
					<button onClick={ocultar}>
						<img className="h-8" src={`/${"src/assets/icons/close24.svg"}`}/>
					</button>
				</div>
				<div className="p-8 pt-0">
					<ConfigLectura />
				</div>
			</div>
		</button>
	);
}