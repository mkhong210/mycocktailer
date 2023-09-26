import React from 'react'
import { Link } from 'react-router-dom'
import './IngredItem.scss'

function IngredItem({ item}) {
	return (
		<>
			<li className='indigred_item'>
				<Link to={`/ingredient/${item.strIngredient1}`}>
					{/* <Link to={{ pathname: `/ingredient/${item.strIngredient1}`, state: { ingredient: item.strIngredient1 } }}> */}
					{/* <img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} alt={`${item.strIngredient1} img`} /> */}
					<div className='item_inner'>
						{/* <img src={item.strDrinkThumb} alt={item.strDrink} /> */}
						{/* <div className="ingredi_img" style={{ backgroundImage: `url(https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png)` }}></div> */}
						<div className='ingredi_img'>
							<img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} alt={item.strDrink} />
						</div>
					</div>
						<p>{item.strIngredient1}</p>
				</Link>
			</li>
		</>
	)
}

export default IngredItem