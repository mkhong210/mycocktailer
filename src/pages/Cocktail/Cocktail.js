import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Context';
import CockItem from '../../component/Item/CockItem';
import './Cocktail.scss'

function Cocktail() {
	const { data, fetchFn } = useContext(myContext);
	const [cocktail, setCocktail] = useState([]);
	// const [clickedButton, setClickedButton] = useState("Cocktail");

	// menuBtn.forEach((btn, k) => {
	// 	btn.addEventListener('click', (event) => {
	// 		clickedButton = event.target.innerText;
	// 		console.log(clickedButton)
	// 	});
	// });

	const handleButtonClick = (event) => {
		const buttonText = event.target.innerText;
		fetchData(buttonText);
	}
	const fetchData = async (cate) => {
		await fetchFn('cock_a', cate);
		console.log(data);
	};

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await fetchFn('cock_a', clickedButton); // fetchFn을 호출하고 완료될 때까지 기다립니다.
	// 		// try {
	// 		// } catch (error) {
	// 		// 	console.error('API 호출 중 오류 발생:', error);
	// 		// }
	// 	};

	// 	// if (clickedButton) {
	// 	fetchData();
	// 	// }
	// }, [fetchFn, clickedButton]);
	
	useEffect(() => {
		fetchData("Cocktail");
	}, []);

	useEffect(() => {
		setCocktail(data); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	}, [data]);
	const alpa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	const cate = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other \/ Unknown', 'Cocoa', 'Shot', 'Coffee \/ Tea', 'Homemade Liqueur', 'Punch \/ Party Drink', 'Beer', 'Soft Drink']

	return (
		<>
			<section>
				<h2>Cocktail List</h2>
				<div className='inner'>
					<h1>Drinks</h1>
					<div className='cock_menu'>
						{cate.map((v, k) => (
							<button key={k} onClick={handleButtonClick}>{v}</button>
						))}
					</div>
					<ul className='cocktail_wrap'>
						{cocktail.length >= 0 ? (
							cocktail.map((item) => (
								<CockItem item={item} />
							))
						) : (
							<li>데이터가 없습니다.</li>
						)}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Cocktail