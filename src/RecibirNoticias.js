/*****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA OBTENER NOTICIAS, NO COMPONENTES */
/*****************************************************************************/
import * as Notis from "./Noticias"

export function Todo() {
	return(Notis.noticias)
}

export function Filtrado(categoria = "", limite) {
	var MEDIOS_SUSCRITOS = ["aaa"];
	var CATEGORIAS_ACEPTADAS = ["bbb"];
	var noticias = Todo();
	var final = [];
	var debug = "";
	var l = noticias.length;
	if (limite < l) { l = limite; }
	
	for (let i = 0; i < l; i++) {
		if (categoria === "") {
			if (!CATEGORIAS_ACEPTADAS.includes(noticias[i].categorias)) {
				continue;
			}
		} else {
			if (categoria !== noticias[i].categorias) {
				continue;
			}
		}
		
		if (!MEDIOS_SUSCRITOS.includes(noticias[i].medio)) {
			continue;
		}

		final.push(noticias[i]);
		debug = debug + noticias[i].titulo;
	}

	return(debug);
}