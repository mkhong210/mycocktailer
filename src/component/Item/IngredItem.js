import React from 'react'
import { Link } from 'react-router-dom'
import './IngredItem.scss'

function IngredItem({item, index}) {
	return (
		<>
			<li key={index} className='indigred_item'>
				<Link to={`/ingredient/${item.strIngredient1}`}>
				{/* <Link to={{ pathname: `/ingredient/${item.strIngredient1}`, state: { ingredient: item.strIngredient1 } }}> */}
					<img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} alt={`${item.strIngredient1} img`} />
					<p>{item.strIngredient1}</p>
				</Link>
			</li>
		</>
	)
}

export default IngredItem