/****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA ALMACENAR DATOS, NO COMPONENTES */
/****************************************************************************/
const CAT_KEY = "Categorias";
const MED_KEY = "Medios";

export function obt_MEDIOS(){
	const def = ["Tiempo Sur", "Olé", "Crónica", "TyC Sports", "La Nacion", "CNN", "NuevoDia", "Levelup", "TN" ];
	const dat = obtener_datos(MED_KEY, def.toString()).split(",");
	console.log(dat.toString());
	return dat;
}

export function obt_CATEGORIAS(){
	const def = ["Economia", "Clima", "Deporte", "Política", "Gaming"];
	const data = obtener_datos(CAT_KEY, def.toString()).split(",");
	console.log(data.toString());
	return data;
}

export function guar_MEDIOS(val)     { localStorage.setItem(MED_KEY, val.toString()); }
export function guar_CATEGORIAS(val) { localStorage.setItem(CAT_KEY, val.toString()); }
const LEC_KEY = "Lectura";

export function obt_LECTURA(){
	const def = {
		fuente: "Inter",
		tamano: 1.25,
		interlineado: 1.75,
		espParrafos: 100,
		espCaracteres: 100,
		espPalabras: 100,
		anchoPag: 60,
		verImagenes: true,
		colorTexto: "#4f4c58",
		colorFondo: "#ffffff",
		fondoTextura: true,
	};
	const dat = obtener_datos(LEC_KEY, JSON.stringify(def));
	return JSON.parse(dat);
}

export function guar_LECTURA(val){
	localStorage.setItem(LEC_KEY, JSON.stringify(val));
	aplicar_LECTURA();
}

export function aplicar_LECTURA(){
	const conf = obt_LECTURA();
	const raiz = document.documentElement.style;
	raiz.setProperty("--lectura-fuente", conf.fuente);
	raiz.setProperty("--lectura-tamano", conf.tamano + "rem");
	raiz.setProperty("--lectura-interlineado", conf.interlineado);
	raiz.setProperty("--lectura-esp-caracteres", ((conf.espCaracteres - 100) * 0.002) + "em");
	raiz.setProperty("--lectura-esp-palabras", ((conf.espPalabras - 100) * 0.002) + "em");
	raiz.setProperty("--lectura-color-texto", conf.colorTexto);
	raiz.setProperty("--lectura-color-fondo", conf.colorFondo);
	raiz.setProperty("--lectura-ancho-pagina", conf.anchoPag * 0.01);
	raiz.setProperty("--lectura-ocultar-imagenes", conf.verImagenes ? "flex" : "none");
	raiz.setProperty("--lectura-ruido", conf.fondoTextura ? "url(/src/assets/ruido.png)" : "none");

}




/***********/
/* GENERAL */
/***********/
function obtener_datos(key, def){
	if (ALMAC_FUNCIONA() != true) {return def;} // si el navaegador es incapaz de almacenar datos
	
	if(!localStorage.getItem(key)){ // si es la primera vez que el usuario ingresa
		localStorage.setItem(key, def)
		return def;
	}

	return localStorage.getItem(key);
}
// REVISA SI ES COMPATIBLE // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function ALMAC_FUNCIONA() {
	let storage;
	try {
		storage = window.localStorage;
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	} catch (e) {
		return (
			e instanceof DOMException &&
			e.name === "QuotaExceededError" &&
			// acknowledge QuotaExceededError only if there's something already stored
			storage &&
			storage.length !== 0
		);
	}
}