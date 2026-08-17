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

export function guar_MEDIOS(val)     { localStorage.setItem(MED_KEY, val); }
export function guar_CATEGORIAS(val) { localStorage.setItem(CAT_KEY, val); }





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