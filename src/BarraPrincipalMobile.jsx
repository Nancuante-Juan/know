import ElAdaptadorDeBarras3000 from "./ElAdaptadorDeBarras3000";

export default function BarraPrincipalMobile({children}) { return (
	<div className="md:hidden flex flex-col w-screen absolute bottom-auto z-50 justify-end max-h-0">
		<div className="flex w-full h-auto p-4 z-55 gap-2 justify-end">
			{children}
		</div>
		<div className="flex flex-col w-full max-h-0 justify-end"><div className="desenfoque-prog-barra min-h-50 min-w-screen" /></div>
		<ElAdaptadorDeBarras3000 />
	</div>
);}