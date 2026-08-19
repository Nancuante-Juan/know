/****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA ALMACENAR DATOS, NO COMPONENTES */
/****************************************************************************/
const CAT_KEY = "Categorias";
const MED_KEY = "Medios";

export function obt_MEDIOS(){
	const def = ["Tiempo Sur", "Olé", "Crónica", "TyC Sports", "La Nacion"];
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
		tamano: 1,
		interlineado: 1.25,
		espCaracteres: 100,
		espPalabras: 100,
		verImagenes: true,
		colorTexto: "#000000",
		colorFondo: "#ffffff",
	};
	const dat = obtener_datos(LEC_KEY, JSON.stringify(def));
	return JSON.parse(dat);
}

export function guar_LECTURA(val){
	localStorage.setItem(LEC_KEY, JSON.stringify(val));
	aplicar_LECTURA();
}

export function aplicar_LECTURA(){
	const lectura = obt_LECTURA();
	const raiz = document.documentElement.style;
	raiz.setProperty("--lectura-tamano", lectura.tamano + "rem");
	raiz.setProperty("--lectura-interlineado", lectura.interlineado);
	raiz.setProperty("--lectura-esp-caracteres", ((lectura.espCaracteres - 100) * 0.002) + "em");
	raiz.setProperty("--lectura-esp-palabras", ((lectura.espPalabras - 100) * 0.002) + "em");
	raiz.setProperty("--lectura-color-texto", lectura.colorTexto);
	raiz.setProperty("--lectura-color-fondo", lectura.colorFondo);
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