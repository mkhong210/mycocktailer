import React from 'react'
import { Link } from 'react-router-dom'
import './IngredItem.scss'

function IngredItem({ item}) {
	const ingredientName = item.strIngredient1 || item.strIngredient;

	return (
		<>
			<li className='indigred_item'>
				<Link to={`/ingredient/${ingredientName}`}>
					{/* <Link to={{ pathname: `/ingredient/${item.strIngredient1}`, state: { ingredient: item.strIngredient1 } }}> */}
					{/* <img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} alt={`${item.strIngredient1} img`} /> */}
					<div className='item_inner'>
						{/* <img src={item.strDrinkThumb} alt={item.strDrink} /> */}
						{/* <div className="ingredi_img" style={{ backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png)` }}></div> */}
						<div className='ingredi_img'>
							<img src={`https://www.thecocktaildb.com/images/ingredients/${ingredientName}.png`} alt={`${ingredientName}_img`} />
						</div>
					</div>
						<p>{ingredientName}</p>
				</Link>
			</li>
		</>
	)
}

export default IngredItem