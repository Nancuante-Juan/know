import BarraNavegación from "./BarraNavegacion";
import DivisorSeccion from "./DivisorSeccion";
import PortadaNoticia from "./PortadaNoticia";

export default function App() { return (
<div className="bg-black">
	<BarraNavegación />


	
	<DivisorSeccion seccion="Política"/>
	<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-4 pt-0 ideal-height-pantalla">
		<PortadaNoticia titulo="El precio del oro alcanza nuevos máximos" imagen={"src/assets/fotos/tiempo_sur/foto_2.jpg"} medio="Tiempo Sur" categorias="Economia" descripcion="El oro se mantiene en un constante ascenso, generando interés en los inversores."/>
		<PortadaNoticia titulo="Santa Cruz se prepara para un fin de semana con lluvias y temperaturas bajo cero" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="TiempoSur" categorias="Clima" descripcion="El Departamento de Meteorología y Climatología de la Administración General de Vialidad Provincial (AGVP), anticipa un..." />
		<PortadaNoticia titulo="Platense empató 1-1 ante Coquimbo Unido" imagen={"src/assets/fotos/olé/foto_1.jpg"} medio="Olé" categorias="Fútbol" descripcion="Luego del remate que falló Mainero y de estar en ventaja todo el partido, al Calamar se lo igualó Vadalá..." />
		<PortadaNoticia titulo="Embargan el departamento donde Cristina Kirchner cumple prisión domiciliaria" imagen={"src/assets/fotos/cronica/foto_1.webp"} medio="Crónica" categorias="Política" descripcion="El TOF 2 dictó la medida cautelar sobre la propiedad de San José 1111..." />
		<PortadaNoticia titulo="Los 10 juegos que REGALA PlayStation durante agosto" imagen={"src/assets/fotos/tyc_sports/foto_1.webp"} medio="TyC Sports" categorias="Gaming" descripcion="Helldivers 2, Kingdom Come: Deliverance 2, Vampire Survivors y Hell is Us encabezan una tanda que también..." />
		<PortadaNoticia titulo="El Gobierno dice que comprará al menos otros US$10.000 millones" imagen={"src/assets/fotos/la_nacion/foto_1.avif"} medio="La Nacion" categorias="Política - Economia" descripcion="El viceministro de Economía, José Luis Daza, aseguró que el país llegará a los próximos comicios con mejores condiciones financieras..." />
	</div>
</div>


);}