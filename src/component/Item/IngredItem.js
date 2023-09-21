import React from 'react'
import { Link } from 'react-router-dom'

function IngredItem({item, index}) {
	return (
		<>
			<li key={index}>
				<Link to={`/ingredient/${item.strIngredient1}`}>
				{/* <Link to={{ pathname: `/ingredient/${item.strIngredient1}`, state: { ingredient: item.strIngredient1 } }}> */}
					<p>{item.strIngredient1}</p>
					<img src={`https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}.png`} alt={`${item.strIngredient1} img`} />
				</Link>
			</li>
		</>
	)
}

export default IngredItem