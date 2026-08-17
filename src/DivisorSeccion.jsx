import { Link } from "react-router";

export default function DivisorSeccion ({seccion, link}) { return (
	<Link className="flex w-full text-white justify-between px-4 items-center hover-parent h-13" to={link} >
		<h1 className="Fonts-DMSerif text-4xl">{seccion}</h1>
		<div className="underline text-xl bg-amarillo-hover">{"Ver más ->"}</div>
	</Link>
);}