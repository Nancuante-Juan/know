import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		const collection = document.getElementsByClassName("overflow-y-auto");
		for (let i = 0; i < collection.length; i++) {
			collection[i].scroll(0,0);
		}
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}