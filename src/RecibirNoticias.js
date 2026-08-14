/*****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA OBTENER NOTICIAS, NO COMPONENTES */
/*****************************************************************************/
import * as Notis from "./Noticias"
import * as Almac from "./Almacenamiento"

export function Todo() {
	return(Notis.noticias)
}

export function Filtrado(categoria = "", limite) {
	var noticias = Todo();
	var final = [];
	var debug = "";
	
	for (let i = 0; i < noticias.length; i++) {
		if (categoria === "") {
			if (!noticias[i].categorias.some(e => Almac.obt_CATEGORIAS().includes(e))) {
				continue;
			}
		} else {
			if (!noticias[i].categorias.some(e => categoria === e)) {
				continue;
			}
		}
		
		
		if (!Almac.obt_MEDIOS().includes(noticias[i].medio)) {
			continue;
		}

		final.push(noticias[i]);
		debug = debug + noticias[i].titulo;
		if (limite == undefined){
			if (final.length >= limite){
				break;
			}
		}
	}

	return(final);
}