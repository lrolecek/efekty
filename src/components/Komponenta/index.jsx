import {useState, useEffect} from 'react'

function Komponenta() {

	const [pocet, setPocet] = useState(0)
	const [jinyPocet, setJinyPocet] = useState(999)

	useEffect(
		() => {
			console.log('prekresleni')
		}
	)

	useEffect(
		() => {
			console.log('prvni spusteni')
		},
		[]
	)

	useEffect(
		() => {
			console.log('zmena poctu')
		},
		[pocet, jinyPocet]
	)

	return (
		<>
			<h2>Počet: {pocet}</h2>
			<button onClick={()=>{setPocet(pocet+1)}}>+</button>
			<h2>Jiný počet: {jinyPocet}</h2>
			<button onClick={()=>{setJinyPocet(jinyPocet+1)}}>+</button>

		</>
	);
}

export default Komponenta;