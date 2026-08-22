import ConfigLectura from "./ConfigLectura";
import Nots from "./Noticia";

export default function PersonalizarLecturaPopup({mostrar = false, ocultar}) {
	if (mostrar){mostrar = "fixed"}
	else {mostrar = "hidden"}
	return (
		<div className={"fixed top-0 right-0 w-screen h-screen flex z-25 "+mostrar}>
			<button className="w-[calc(100%-33rem)]" onClick={ocultar} />
			<div className="flex flex-col w-132 bg-(--lectura-color-fondo) text-(--lectura-color-texto) ow-the-edge z-20 overflow-x-hidden overflow-y-auto min-h-screen max-h-screen" style={{ maxWidth: "calc(100vw - 2rem)"}}>
				<div className="flex justify-between items-center h-fit w-full sticky bg-(--lectura-color-fondo) top-0 p-8">
					<p className="text-4xl Fonts-RobotoC font-black">PERSONALIZACIÓN</p>
					<button onClick={ocultar}>
						<img className="h-8" src={`/${"src/assets/icons/close24.svg"}`}/>
					</button>
				</div>
				<div className="p-8 pt-0">
					<ConfigLectura />
				</div>
			</div>
		</div>
	);
}