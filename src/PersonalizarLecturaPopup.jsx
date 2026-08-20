import ConfigLectura from "./ConfigLectura";

export default function PersonalizarLecturaPopup() {
	return (
		<div className="">
			<div className="flex flex-col fixed top-4 right-4 w-132 bg-white ow-the-edge z-20 overflow-x-hidden overflow-y-auto" style={{minHeight: "calc(100vh - 2rem)", maxHeight: "calc(100vh - 2rem)", maxWidth: "calc(100vw - 2rem)"}}>
				<div className="flex justify-between items-center h-fit w-full sticky bg-white top-0 p-8">
					<p className="text-4xl Fonts-RobotoC font-black">PERSONALIZACIÓN</p>
					<img className="h-8" src={`/${"src/assets/icons/close24.svg"}`}/>
				</div>
				<div className="p-8 pt-0">
					<ConfigLectura />
				</div>
			</div>
		</div>
	);
}