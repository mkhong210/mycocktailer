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
			await fetchFn("get", cate);
		} catch (error) {
			console.error('API 호출 중 오류 발생:', error);
		}
	};

	useEffect(() => {
		fetchData('list');
	}, []);

	useEffect(() => {
		setIngredients(data);
	}, [data]);

	// console.log(data)

	return (
		<>
			<section className='ingredi_list'>
				<h2>Ingredients List</h2>
				<div className='inner'>
					<h1>INGREDIENTS</h1>
					<div className='search_wrap'>
						<form className='search'>
							<input type='text' ref={inputTxt} name='search' className='search_box' placeholder='재료 이름을 입력하세요' />
							<button className='search_btn' onClick={(e) => { handleSearch(e) }}>
								<img src={search} />
							</button>
						</form>
					</div>
					<ul className='ingredi_wrap'>
						{ingredients ? (
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