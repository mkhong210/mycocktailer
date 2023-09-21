import React, {useEffect, useState } from 'react'
// import { myContext } from '../../Context'
import axios from 'axios';
import './Home.scss'
import Mainslide from '../../component/Mainslide/Mainslide';
import { Link } from 'react-router-dom';

function Home() {
	// const { data, fetchFn } = useContext(myContext);
	const popDrink = ["Mojito", "Old Fashioned", "Long Island Tea", "Whiskey Sour", "Dry Martini", "Margarita"];
	// drink[0]
	const popIngredi = ["Vodka", "Gin", "Rum", "Tequila"]

	let cockdb = axios.create({
		baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
	})

	const [sec1, setSec1] = useState([]);
	const [sec3, setSec3] = useState([]);

	// const mainShow = async () => {
	// 	const searchPromises = popDrink.map(drink => cockdb.get(`/search.php?s=${drink}`));
	// 	console.log(...searchPromises)
	// 	// const searchResults = await Promise.all(searchPromises);

	// 	// const sec2Data = searchResults.map(result => result.data.drinks).flat();
	// 	// setSec2(sec2Data);

	// 	// const selectedResult = searchResults.find(result => result.data.drinks.length > 0);

	// 	// if (selectedResult) {
	// 	// 	setSec2(selectedResult.data.drinks);
	// 	// }

	// 	for (let i = 0; i < popDrink.length; i++) {
	// 		const response = await cockdb.get(`/search.php?s=${popDrink[i]}`);
	// 		const selectedDrink = response.data.drinks[0];
	// 		if (selectedDrink) {
	// 			setSec2(prevState => [...prevState, selectedDrink]);
	// 		}
	// 	}



	// 	const [mainSrc1, mainSrc3] = await Promise.all([
	// 		cockdb.get(`random.php`),
	// 		// cockdb.get(`/search.php?s=${popDrink[0]}`),
	// 		// ...searchPromises,
	// 		cockdb.get(`/search.php?s=${popDrink[0]}`)
	// 	]);
	// 	setSec1(mainSrc1.data.drinks);
	// 	// setSec2(mainSrc2.data.drinks);
	// 	// setSec2(mainSrc2.map(result => result.data.drinks).flat());
	// 	setSec3(mainSrc3.data.drinks);
	// 	// console.log(mainSrc2.data.drinks)
	// }

	const mainShow = async () => {
		try {
			// Section 1 - random drink
			const mainSrc1 = await cockdb.get(`random.php`);
			setSec1(mainSrc1.data.drinks);

			// Section 2 - drinks based on popDrink
			// component

			// Section 3 - drinks based on popDrink[0]
			// const searchResults = await Promise.all(popDrink.map(drink => cockdb.get(`/search.php?s=${drink}`)));
			// const sec2Data = searchResults.map(result => result.data.drinks[0]).filter(Boolean);

			const mainSrc3 = await cockdb.get(`/search.php?s=${popDrink[0]}`);
			setSec3(mainSrc3.data.drinks);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		mainShow(); // 컴포넌트가 마운트될 때 mainShow 호출
	}, [])

	return (
		<>
			<section className='main_sec1'>
				<div className='inner'>
					<h3 className='lang_kr'>오늘의<br />추천칵테일</h3>
					{/* sec1 데이터 출력 */}
					{sec1.map((item) => (
						<span key={item.idDrink} className='random'>{item.strDrink}</span>
					))}
				</div>
			</section>
			<Mainslide />
			<section className='main_sec3'>
				<div className='inner'>
					{popIngredi.map((ingredient, index) => (
						<div key={index}>
							<Link to={`/ingredient/${ingredient}`}>
								<img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`} alt={ingredient} />
								{ingredient}
							</Link>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Home