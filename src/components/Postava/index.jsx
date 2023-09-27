import './style.css'

function Postava({jmeno, rokNarozeni, barvaOci, vyska}) {
	return (
		<div className="postava">
			<h3>{jmeno}</h3>
			<p>Rok narození: {rokNarozeni} | Barva očí: {barvaOci} | Výška: {vyska}</p>
		</div>
	);
}

export default Postava;