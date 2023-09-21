// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Context';
import IngredItem from '../../component/Item/IngredItem';

function Ingredi() {
	const { data, fetchFn } = useContext(myContext);
	const [ingredients, setIngredients] = useState([]);

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchFn('get'); // fetchFn을 호출하고 완료될 때까지 기다립니다.
			} catch (error) {
				console.error('API 호출 중 오류 발생:', error);
			}
		};

		fetchData(); // fetchData 함수를 호출합니다.
	}, [fetchFn]);

	useEffect(() => {
		setIngredients(data); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	}, [data]);

	return (
		<div>
			<h1>Available Ingredients</h1>
			<ul>
				{ingredients.map((item, index) => (
					<IngredItem item={item} index={index} />
				))}
			</ul>
		</div>
	);
}

export default Ingredi