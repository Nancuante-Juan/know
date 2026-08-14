/*****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA OBTENER NOTICIAS, NO COMPONENTES */
/*****************************************************************************/
import * as Notis from "./Noticias"

export function Todo() {
	return(Notis.noticias)
}

export function Filtrado(categoria = "", limite) {
	var MEDIOS_SUSCRITOS = ["Tiempo Sur", "Olé", "Crónica", "TyC Sports", "La Nacion"];
	var CATEGORIAS_ACEPTADAS = ["Economia", "Clima", "Deporte", "Política", "Gaming"];
	var noticias = Todo();
	var final = [];
	var debug = "";
	var l = noticias.length - 1;
	if (limite < l) { l = limite; }
	
	for (let i = 0; i <= l; i++) {
		if (categoria === "") {
			if (!noticias[i].categorias.some(e => CATEGORIAS_ACEPTADAS.includes(e))) {
				continue;
			}
		} else {
			if (!noticias[i].categorias.some(e => categoria === e)) {
				continue;
			}
		}
		
		
		if (!MEDIOS_SUSCRITOS.includes(noticias[i].medio)) {
			continue;
		}

		final.push(noticias[i]);
		debug = debug + noticias[i].titulo;
	}

	return(final);
}