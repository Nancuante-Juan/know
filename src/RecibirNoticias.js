/*****************************************************************************/
/* ESTE ARCHIVO SOLO CONTIENTE MÉTODOS PARA OBTENER NOTICIAS, NO COMPONENTES */
/*****************************************************************************/
import * as Notis from "./Noticias"
import * as Almac from "./Almacenamiento"

export var ya_mostrado = [];

export function Todo() {
	return(Notis.noticias)
}

export function Filtrado(categoria = "", limite) {
	var noticias = Todo();
	var final = [];
	
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

		if (ya_mostrado.includes(noticias[i].id)) {
			continue;
		}

		final.push(noticias[i]);
		ya_mostrado.push(noticias[i].id);
		if (limite != undefined){
			if (final.length >= limite){
				break;
			}
		}
	}

	return(final);
}

export function reset_ya_mostrado() {
	ya_mostrado.length = 0;
}