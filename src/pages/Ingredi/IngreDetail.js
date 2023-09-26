import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CockItem from '../../component/Item/CockItem';
import Back from '../../component/Item/Back';
import './Ingredi.scss'
// import { myContext } from '../../Context';

function IngreDetail() {
	// const { data, fetchFn } = useContext(myContext);
	// const [cocktails, setCocktails] = useState([]);
	// const location = useLocation();
	// const ingredient = location.state;
	// console.log(slice(location.pathname))
	const { ingredient } = useParams();

	// useEffect(() => {
	// 	// const fetchData = async () => {
	// 	// 	try {
	// 	// 		const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
	// 	// 		const data = response.data.drinks || [];
	// 	// 		setCocktails(data);
	// 	// 	} catch (error) {
	// 	// 		console.error('API 호출 중 오류 발생:', error);
	// 	// 	}
	// 	// };

	// 	// fetchData();
	// 	fetchFn('filter', ingredient);
	// 	setCocktails(data);
	// }, []);
	// console.log(data)
	// // console.log(ingredient)

	// 방법 1 - success 
	// useEffect(() => {
	//   const fetchData = async () => {
	//     try {
	//       await fetchFn('filter', ingredient); // fetchFn을 호출하고 완료될 때까지 기다립니다.
	//     } catch (error) {
	//       console.error('API 호출 중 오류 발생:', error);
	//     }
	//   };

	//   fetchData(); // fetchData 함수를 호출합니다.
	// }, [fetchFn]);


	// useEffect(() => {
	//   setCocktails(data); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	// }, [data]);
	// console.log(data)

	// 방법 2?
	// const [sec1, setSec1] = useState([]);
	// const [sec2, setSec2] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const [result1, result2] = await Promise.all([
	// 				fetchFn('filter', ingredient),
	// 				fetchFn('search', ingredient)
	// 			]);
	// 			setSec1(result1);
	// 			setSec2(result2);
	// 			console.log(result1)
	// 		} catch (error) {
	// 			console.error('API 호출 중 오류 발생:', error);
	// 		}
	// 	};

	// 	fetchData();
	// }, [fetchFn, ingredient]);

	// 방법 2-
	// const ingredShow = async () => {
	// 	const [mainSrc1, mainSrc2] = await Promise.all([
	// 		fetchFn('filter', ingredient),
	// 		fetchFn('search', ingredient)
	// 	]);

	// 	// const mainSrc1 = await fetchFn('filter', ingredient);
	// 	// const mainSrc2 = await fetchFn('search', ingredient);

	// 	setSec1(mainSrc1);
	// 	setSec2(mainSrc2);
	// 	console.log(mainSrc1)
	// }

	// useEffect(() => {
	// 	ingredShow(); // 컴포넌트가 마운트될 때 mainShow 호출
	// }, []);

	let cockdb = axios.create({
		baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
	})

	const [sec1, setSec1] = useState([]);
	const [sec2, setSec2] = useState([]);

	const mainShow = async () => {
		try {
			// Section 1
			const mainSrc1 = await cockdb.get(`/search.php?i=${ingredient}`);
			setSec1(mainSrc1.data.ingredients[0]);

			// Section 2
			const mainSrc2 = await cockdb.get(`/filter.php?i=${ingredient}`);
			setSec2(mainSrc2.data.drinks);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	useEffect(() => {
		mainShow();
	}, [])

	return (
		<>
			{/* {ingredient && ( */}
			<section className='inner'>
				<h2>Ingredient Detail</h2>
				<Back />
				{/* <h1>Cocktail List with {ingredient}</h1> */}
				<div className='img_wrap'>
					<img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}.png`} />
				</div>
				<h1>{sec1.strIngredient}</h1>
				{/* fonts	14px */}
				<p className='desc'>{sec1.strDescription}</p>
				<ul className='cock_InIngredi'>
					{sec2.map((cocktail, index) => (
						<CockItem key={index} item={cocktail} />
					))}
				</ul>
			</section>
		</>
	);
}

export default IngreDetail;