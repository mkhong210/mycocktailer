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

	const handleSearch = async () => {
		const searchTerm = inputTxt.current.value;
		// // console.log(searchTerm);

		// const newData = await fetchFn('search', searchTerm);

		//   // 데이터를 가져왔으면 state를 업데이트합니다.
		//   setLocalData(newData);
		console.log(searchTerm)
		// fetchFn("search_i", searchTerm)
		
	};

	// useEffect(() => {
	// 	// const fetchData = async () => {
	// 	// 	try {
	// 	// 		const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
	// 	// 		const data = response.data.drinks || [];
	// 	// 		setIngredients(data);
	// 	// 	} catch (error) {
	// 	// 		console.error('API 호출 중 오류 발생:', error);
	// 	// 	}
	// 	// };

	// 	fetchFn('get');
	// 	setIngredients(data);
	// }, []);

	const fetchData = async (cate) => {
		await fetchFn("get", cate); // fetchFn을 호출하고 완료될 때까지 기다립니다.
		// try {
		// } catch (error) {
		// 	console.error('API 호출 중 오류 발생:', error);
		// }
	};

	useEffect(() => {

		fetchData('list'); // fetchData 함수를 호출합니다.
	}, [fetchFn]);

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
						<button className='search_btn' onClick={console.log(inputTxt)}>
							<img src={search} />
						</button>
					</div>
					<ul className='ingredi_wrap'>
						{ingredients.length > 0 ? (
							ingredients.map((item, index) => (
								<IngredItem key={index} item={item} />
							))
						) : (
							<li>데이터가 없습니다.</li>
						)}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Ingredi