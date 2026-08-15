import { useState } from "react";
import "./main.css";
 
const AJUSTES = [
	{ titulo: "Perfil", detalle: "Nombre, foto, datos" },
	{ titulo: "Notificaciones", detalle: "Alertas y sonidos" },
	{ titulo: "Privacidad", detalle: "Visibilidad y datos" },
	{ titulo: "Seguridad", detalle: "Contraseña, 2FA" },
	{ titulo: "Idioma", detalle: "Español (AR)" },
	{ titulo: "Tema", detalle: "Claro / Oscuro" },
];
 
export default function Configuracion() {
 
	const [abierto, setAbierto] = useState(false);
	const [seleccionado, setSeleccionado] = useState(null);
 
	return (
		<div className="fixed top-5 right-5 flex flex-col items-end gap-2.5">
			<button className="bg-neutral-800 text-white px-4 py-2 rounded-md" onClick={() => setAbierto(!abierto)}>
				- Configuración
			</button>
 
			{abierto && (
				<div className="w-[258px] max-h-[80vh] bg-neutral-100 border border-neutral-300 rounded-md p-3 flex flex-col gap-[10px] overflow-y-auto">
					{AJUSTES.map((item) => (
						<div
							key={item.titulo}
							onClick={() => setSeleccionado(seleccionado === item.titulo ? null : item.titulo)}
							className={"bg-white border border-neutral-300 rounded-lg p-3 cursor-pointer transition-transform " + (seleccionado === item.titulo ? "scale-[1.15] z-10 rectangulo-seleccionado" : "")}
						>
							<div className="font-semibold">{item.titulo}</div>
							<div className="text-sm text-neutral-500">{item.detalle}</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}