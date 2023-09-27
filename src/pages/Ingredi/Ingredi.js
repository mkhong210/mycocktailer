// import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { myContext } from '../../Context';
import IngredItem from '../../component/Item/IngredItem';
import './Ingredi.scss'
import search from '../../img/common/Common_search.png'

function Ingredi() {
	const { data, fetchFn } = useContext(myContext);
	const [ingredients, setIngredients] = useState([]);

	const inputTxt = useRef();

	const handleSearch = async (e) => {
		e.preventDefault();
		const searchTerm = inputTxt.current.value;
		// // console.log(searchTerm);

		console.log(searchTerm)
		// fetchFn("search_i", searchTerm)
		const newData = await fetchFn('search_i', searchTerm);
		console.log(newData)
		setIngredients(newData);

		inputTxt.current.value = '';
	};

	const fetchData = async (cate) => {
		try {
			await fetchFn("get", cate); // fetchFn을 호출하고 완료될 때까지 기다립니다.
		} catch (error) {
			console.error('API 호출 중 오류 발생:', error);
		}
	};

	useEffect(() => {
		fetchData('list'); // fetchData 함수를 호출합니다.
	}, []);

	useEffect(() => {
		setIngredients(data); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	}, [data]);

	console.log(data)

	return (
		<>
			<section className='ingredi_list'>
				<h2>Ingredients List</h2>
				<div className='inner'>
					<h1>INGREDIENTS</h1>
					<div className='search_wrap'>
						<input type='text' ref={inputTxt} name='search' className='search'></input>
						<button className='search_btn' onClick={(e) => { handleSearch(e) }}>
							<img src={search} />
						</button>
					</div>
					<ul className='ingredi_wrap'>
						{ingredients && ingredients.length > 0 ? (
							ingredients.map((item, index) => (
								<IngredItem key={index} item={item} />
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
	);
}

export default Ingredi