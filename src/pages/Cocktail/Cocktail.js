import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Context';
import CockItem from '../../component/Item/CockItem';
import './Cocktail.scss'

function Cocktail() {
	const { data, fetchFn } = useContext(myContext);
	const [cocktail, setCocktail] = useState([]);
	// const [clickedButton, setClickedButton] = useState("Cocktail");
	
	const [isSearch, setIsSearch] = useState(false);

	const handleButtonClick = async (event) => {
		const buttonText = event.target.innerText;
		await fetchData(buttonText);
	}
	const fetchData = async (cate) => {
		await fetchFn('cock_a', cate);
		// console.log(data);
		// setIsSearch(true);
		
    setCocktail(data); // cocktail 상태를 업데이트
    setIsSearch(true); // isSearch를 true로 업데이트
	};

	useEffect(() => {
		fetchData("a");
		// fetchData("Cocktail");
	}, []);

	useEffect(() => {
		if (isSearch) {
			setCocktail(data);
			setIsSearch(false);
		}
	}, [data, isSearch]);

	console.log(data)
	console.log(cocktail)

	const alpa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	// const cate = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other \/ Unknown', 'Cocoa', 'Shot', 'Coffee \/ Tea', 'Homemade Liqueur', 'Punch \/ Party Drink', 'Beer', 'Soft Drink']
	// console.log(data)
	return (
		<>
			<section>
				<h2>Cocktail List</h2>
				<div className='inner'>
					<h1>Drinks</h1>
					<div className='cock_menu'>
						{alpa.map((v, k) => (
							<button key={k} onClick={handleButtonClick}>{v}</button>
						))}
					</div>
					<ul className='cocktail_wrap'>
						{cocktail !== null ? (
							cocktail.map((item, index) => (
								<CockItem key={index} item={item} />
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