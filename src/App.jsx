import AutoPortada from "./AutoPortada";
import BarraNavegación from "./BarraNavegacion";
import DefaultGrid from "./DefaultGrid";
import PortadaNoticia from "./PortadaNoticia";
import * as Recibir from "./RecibirNoticias";

export default function App() { 

var inicio = Recibir.Filtrado("", 4)

return (
<div className="bg-black">
	<BarraNavegación />
	
	<div className="overflow-y-auto overflow-x-hidden lg:snap-y snap-mandatory" style={{ maxHeight: "calc(100vh - 52px)", minHeight: "calc(100vh - 52px)",}}>
		
		<DefaultGrid tipo="inicio" cara={
			<AutoPortada noticia={inicio[0]} tipo="grande" />}>
			<AutoPortada noticia={inicio[1]} tipo="pequeno3" />
			<AutoPortada noticia={inicio[2]} tipo="pequeno3" />
			<AutoPortada noticia={inicio[3]} tipo="pequeno3" />
		</DefaultGrid>
	
		<DefaultGrid seccion="Política" url="">
			<PortadaNoticia titulo="El precio del oro alcanza nuevos máximos" imagen={"src/assets/fotos/tiempo_sur/foto_2.jpg"} medio="Tiempo Sur" categorias="Economia" descripcion="El oro se mantiene en un constante ascenso, generando interés en los inversores."/>
			<PortadaNoticia titulo="Santa Cruz se prepara para un fin de semana con lluvias y temperaturas bajo cero" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="TiempoSur" categorias="Clima" descripcion="El Departamento de Meteorología y Climatología de la Administración General de Vialidad Provincial (AGVP), anticipa un..." />
			<PortadaNoticia titulo="Platense empató 1-1 ante Coquimbo Unido" imagen={"src/assets/fotos/olé/foto_1.jpg"} medio="Olé" categorias="Deporte" descripcion="Luego del remate que falló Mainero y de estar en ventaja todo el partido, al Calamar se lo igualó Vadalá..." />
			<PortadaNoticia titulo="Embargan el departamento donde Cristina Kirchner cumple prisión domiciliaria" imagen={"src/assets/fotos/cronica/foto_1.webp"} medio="Crónica" categorias="Política" descripcion="El TOF 2 dictó la medida cautelar sobre la propiedad de San José 1111..." />
			<PortadaNoticia titulo="Los 10 juegos que REGALA PlayStation durante agosto" imagen={"src/assets/fotos/tyc_sports/foto_1.webp"} medio="TyC Sports" categorias="Gaming" descripcion="Helldivers 2, Kingdom Come: Deliverance 2, Vampire Survivors y Hell is Us encabezan una tanda que también..." />
			<PortadaNoticia titulo="El Gobierno dice que comprará al menos otros US$10.000 millones" imagen={"src/assets/fotos/la_nacion/foto_1.avif"} medio="La Nacion" categorias="Política - Economia" descripcion="El viceministro de Economía, José Luis Daza, aseguró que el país llegará a los próximos comicios con mejores condiciones financieras..." />
			{/*<PortadaNoticia titulo="El eclipse solar de este miércoles, en imágenes" imagen={"src/assets/fotos/cnn/foto_1.webp"} medio="CNN" categorias="Ciencia - Tecnología" descripcion="Un eclipse solar total creó un espectáculo celestial para millones de personas este miércoles..." />
			<PortadaNoticia titulo="Venden Los Angeles Lakers por US$ 12.500 millones al ex CEO de Disney Bob Iger y a Josh Kushner, hermano de Jared" imagen={"src/assets/fotos/cnn/foto_2.avif"} medio="CNN" categorias="Deporte" descripcion="El ex CEO de Disney Bob Iger y el capitalista de riesgo Josh Kushner están comprando uno de los activos más..." />
			<PortadaNoticia titulo="algo" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="aaa" categorias="bbb" descripcion="..." />
			<PortadaNoticia titulo="algo" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="aaa" categorias="bbb" descripcion="..." />
			<PortadaNoticia titulo="algo" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="aaa" categorias="bbb" descripcion="..." />
			<PortadaNoticia titulo="algo" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="aaa" categorias="bbb" descripcion="..." />*/}
		</DefaultGrid>

		<DefaultGrid seccion="Política" url="">
			<PortadaNoticia titulo="El precio del oro alcanza nuevos máximos" imagen={"src/assets/fotos/tiempo_sur/foto_2.jpg"} medio="Tiempo Sur" categorias="Economia" descripcion="El oro se mantiene en un constante ascenso, generando interés en los inversores."/>
			<PortadaNoticia titulo="Santa Cruz se prepara para un fin de semana con lluvias y temperaturas bajo cero" imagen={"src/assets/fotos/tiempo_sur/foto_1_main1.jpg"} medio="TiempoSur" categorias="Clima" descripcion="El Departamento de Meteorología y Climatología de la Administración General de Vialidad Provincial (AGVP), anticipa un..." />
			<PortadaNoticia titulo="Platense empató 1-1 ante Coquimbo Unido" imagen={"src/assets/fotos/olé/foto_1.jpg"} medio="Olé" categorias="Deporte" descripcion="Luego del remate que falló Mainero y de estar en ventaja todo el partido, al Calamar se lo igualó Vadalá..." />
			<PortadaNoticia titulo="Embargan el departamento donde Cristina Kirchner cumple prisión domiciliaria" imagen={"src/assets/fotos/cronica/foto_1.webp"} medio="Crónica" categorias="Política" descripcion="El TOF 2 dictó la medida cautelar sobre la propiedad de San José 1111..." />
			<PortadaNoticia titulo="Los 10 juegos que REGALA PlayStation durante agosto" imagen={"src/assets/fotos/tyc_sports/foto_1.webp"} medio="TyC Sports" categorias="Gaming" descripcion="Helldivers 2, Kingdom Come: Deliverance 2, Vampire Survivors y Hell is Us encabezan una tanda que también..." />
			<PortadaNoticia titulo="El Gobierno dice que comprará al menos otros US$10.000 millones" imagen={"src/assets/fotos/la_nacion/foto_1.avif"} medio="La Nacion" categorias="Política - Economia" descripcion="El viceministro de Economía, José Luis Daza, aseguró que el país llegará a los próximos comicios con mejores condiciones financieras..." />
		</DefaultGrid>
	</div>
</div>


);}