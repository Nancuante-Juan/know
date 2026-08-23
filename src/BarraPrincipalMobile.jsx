import ElAdaptadorDeBarras3000 from "./ElAdaptadorDeBarras3000";

export default function BarraPrincipalMobile({children, too_small="md:hidden "}) { return (
	<div className={too_small+" flex flex-col w-screen z-50 justify-end max-h-0"}>
		<div className="flex w-full h-auto p-4 z-55 gap-2 justify-end">
			{children}
		</div>
		<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog-barra min-h-30 min-w-screen z-50" /></div>
		<ElAdaptadorDeBarras3000 />
	</div>
);}