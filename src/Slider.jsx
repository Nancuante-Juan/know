export default function Slider({nombre, append = "", min,max,step}){
	var nums = []
	
	for (let i = 0; i <= Math.floor ((max - min) / step); i++) {
		nums.push((min + i * step).toString() + append)
	}
	
	const numeros_html = nums.map(num =>
		<p className="w-6 text-center">{num}</p>
	);
	
	return(
		<div className="flex flex-col max-w-120 min-w-1/3 w-full">
			{nombre}:
			<input type="range" min={min} max={max} step={step} />
			<div className="flex justify-between text-gris -mx-2">
				{numeros_html}
			</div>
		</div>
	); 
}