import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Back from '../../component/Item/Back';
import { myContext } from '../../Context';

function CockDetail() {
	const {  id } = useParams();
	console.log( id);
	const { data, fetchFn } = useContext(myContext);
	const [cockdetail, setCockdetail] = useState([]);

	const fetchData = async () => {
		await fetchFn('cock_detail', id);
		// setCockdetail(...data);
	};
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await fetchFn('cock_detail', id)
	// 		// try {
	// 		// } catch (error) {
	// 		// 	console.error('API 호출 중 오류 발생:', error);
	// 		// }
	// 	};

	// 	fetchData(); // fetchData 함수를 호출합니다.
	// }, [fetchFn]);

	useEffect(() => {
		fetchData(); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	}, []);
	useEffect(() => {
		setCockdetail(...data); // data가 업데이트될 때마다 ingredients를 업데이트합니다.
	}, [data]);
	console.log(cockdetail)

	return (
		<>
			<Back />
			<section>
				<h2>Cocktail Detail</h2>
				<h1>{cockdetail.strDrink}</h1>
				<img src={cockdetail.strDrinkThumb} alt={cockdetail.strDrink} />
				<p>Category: {cockdetail.strCategory}</p>
				<p>Glass: {cockdetail.strGlass}</p>
				<p>Instructions: {cockdetail.strInstructions}</p>

				<h3>Ingredients:</h3>
				<ul>
					{Array.from(Array(15).keys()).map(i => {
						const ingredient = cockdetail[`strIngredient${i + 1}`];
						const measure = cockdetail[`strMeasure${i + 1}`];
						if (ingredient && measure) {
							return (
								<li key={i}>
									<Link to={`/ingredient/${ingredient}`}>
									<img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`} />
									<p>{measure} {ingredient}</p>
									</Link>
								</li>
							);
						}
						return null;
					})}
				</ul>

				{cockdetail.strImageSource && (
					<p>
						Image Source: <a href={cockdetail.strImageSource}>Link</a>
					</p>
				)}
			</section>
		</>
	)
}

export default CockDetail