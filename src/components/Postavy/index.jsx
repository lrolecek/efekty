import {useState, useEffect} from 'react'
import Postava from './../Postava'

function Postavy() {

	const [nacitani, setNacitani] = useState(true);
	const [postavy, setPostavy] = useState([]);

	const [oci, setOci] = useState('');

	useEffect(
		() => {
			setNacitani(true)
			fetch(`https://swapi.dev/api/people`)
			.then(response => response.json())
			.then(data => {
				console.log(data.results)
				if (oci === '') {
					setPostavy(data.results)
				} else {
					setPostavy(data.results.filter(p => p.eye_color === oci))
				}
				setNacitani(false)
			})
		},
		[oci]
	)

	return (
		<>
			<h2>Postavy ze Star Wars</h2>
			{ nacitani
				? <p>Načítám data...</p>
				: <p>Už máme načteno</p>
			}

			<hr />
			<p>{oci}</p>
			<select
				value={oci}
				onChange={(event)=>{ setOci(event.target.value) }}
			>
				<option value=""></option>
				<option value="blue">modré</option>
				<option value="brown">hnědé</option>
				<option value="yellow">žluté</option>
				<option value="red">červené</option>
			</select>

			<hr />

			<p>{postavy.length} záznamů</p>

			{
				postavy.map(postava => (
					<Postava
						key={postava.name}
						jmeno={postava.name}
						rokNarozeni={postava.birth_year}
						barvaOci={postava.eye_color}
						vyska={postava.height}
					/>
				) )
			}
		</>
	);
}

export default Postavy;