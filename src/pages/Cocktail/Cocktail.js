import React, { useContext, useEffect, useRef, useState } from 'react'
import { myContext } from '../../Context';
import CockItem from '../../component/Item/CockItem';
import './Cocktail.scss'
import search from '../../img/common/Common_search.png'

function Cocktail() {
	const { data, fetchFn } = useContext(myContext);
	const [cocktail, setCocktail] = useState([]);
	// const [clickedButton, setClickedButton] = useState("Cocktail");
	
	const inputTxt = useRef();

	// tab 메뉴
	const handleButtonClick = async (event) => {
		const buttonText = event.target.innerText;
		await fetchData(buttonText);
	}
	
	// 검색
	const handleSearch = async (e) => {
		e.preventDefault();
		const searchTerm = inputTxt.current.value;
		// // console.log(searchTerm);

		const newData = await fetchFn('search_d', searchTerm);
		// console.log(newData);
		setCocktail(newData);

		inputTxt.current.value = '';
	};

	const fetchData = async (cate) => {
		await fetchFn('cock_a', cate);
		
    setCocktail(data);
	};

	useEffect(() => {
		fetchData("a");
		// fetchData("Cocktail");
	}, []);

	useEffect(() => {
		setCocktail(data);
	}, [data]);

	// console.log(data)
	// console.log(cocktail)

	const alpa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	// const cate = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other \/ Unknown', 'Cocoa', 'Shot', 'Coffee \/ Tea', 'Homemade Liqueur', 'Punch \/ Party Drink', 'Beer', 'Soft Drink']
	return (
		<>
			<section className='cocktail_list'>
				<h2>Cocktail List</h2>
				<div className='inner'>
					<h1>Drinks</h1>
					<div className='search_wrap'>
						<input type='text' ref={inputTxt} name='search' className='search'></input>
						<button className='search_btn' onClick={(e) => { handleSearch(e) }}>
							<img src={search} />
						</button>
					</div>
					<div className='cock_menu'>
						{alpa.map((v, k) => (
							<button key={k} onClick={handleButtonClick}>{v}</button>
						))}
					</div>
					<ul className='cocktail_wrap'>
						{cocktail && cocktail.length > 0 ? (
							cocktail.map((item, index) => (
								<CockItem key={index} item={item} />
							))
						) : (
							<li className='no_data'>
								<p>데이터가 없습니다.</p>
							</li>
						)}
					</ul>
				</div>
			</section>
		</>
	)
}

export default Cocktail