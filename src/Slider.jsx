export default function Slider({nombre, append = "", min, max, step, value, onChange, extraCSS=" flex"}){
	var nums = []
	
	for (let i = 0; i <= Math.floor ((max - min) / step); i++) {
		nums.push((min + i * step).toString() + append)
	}
	
	const numeros_html = nums.map(num =>
		<p className="w-6 text-center">{num}</p>
	);
	
	return(
		<div className={"flex-col min-w-1/3 w-full"+extraCSS}>
			{nombre}: {value}{append}
			<input type="range" min={min} max={max} step={step} value={value} onChange={onChange} />
			<div className="flex text-sm justify-between text-gris -mx-2">
				{numeros_html}
			</div>
		</div>
	); 
}