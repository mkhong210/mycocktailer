import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Link } from 'react-router-dom';

function Mainslide() {
	const popDrink = ["Mojito", "Old Fashioned", "Long Island Tea", "Whiskey Sour", "Dry Martini", "Margarita"];

	let cockdb = axios.create({
		baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
	})

	const [sec2, setSec2] = useState([]);

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
			// Section 2: Get drinks based on popDrink
			const searchResults = await Promise.all(popDrink.map(drink => cockdb.get(`/search.php?s=${drink}`)));
			const sec2Data = searchResults.map(result => result.data.drinks[0]).filter(Boolean);
			setSec2(sec2Data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		mainShow(); // 컴포넌트가 마운트될 때 mainShow 호출
	}, [])
	return (
		<>
			<section className='main_sec2'>
				<div className='inner'>

					<Swiper
						slidesPerView={1.4}
						spaceBetween={30}
						loop={true}
						// grabCursor={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						className="mySwiper"
					>
						{sec2.map((item, index) => (
							<SwiperSlide key={index}>
								<Link to={`/cocktail/${item.strDrink}/${item.idDrink}`}>
									<div>
										{/* 각 항목의 이름 */}
										{item.strDrink}
										{/* popDrink 배열을 사용하여 작업 */}
										{/* {popDrink.map((drink, index) => (
										<div key={index}>{drink}</div>
									))} */}
										<img src={item.strDrinkThumb} />
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default Mainslide