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
			<section className='cocktail_detail inner'>
				<h2>Cocktail Detail</h2>
				<div className='img_wrap'>
					<img src={cockdetail.strDrinkThumb} alt={cockdetail.strDrink} className='cocktail_img'/>
				</div>
				<h1>{cockdetail.strDrink}</h1>
				<div className='detail_desc'>
					<p><span>Category : </span>{cockdetail.strCategory}</p>
					<p><span>Glass : </span>{cockdetail.strGlass}</p>
					<p><span>Instructions : </span>{cockdetail.strInstructions}</p>
				</div>

				<h3>Ingredients</h3>
				<ul className='ingred_desc'>
					{Array.from(Array(15).keys()).map(i => {
						const ingredient = cockdetail[`strIngredient${i + 1}`];
						const measure = cockdetail[`strMeasure${i + 1}`];
						if (ingredient && measure) {
							return (
								<li key={i} className='ingred_item'>
									<Link to={`/ingredient/${ingredient}`}>
									<img src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`} />
									<p>{measure} <span>{ingredient}</span></p>
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