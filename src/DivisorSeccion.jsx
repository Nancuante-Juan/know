import { Link } from "react-router";

export default function DivisorSeccion ({seccion, link}) { return (
	<div className="flex w-full text-white justify-between px-4 items-center" >
		<h1 className="Fonts-DMSerif">{seccion}</h1>
		<Link to={link} className="underline text-xl">{"Ver más ->"}</Link>
	</div>
);}