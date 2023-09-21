import React from 'react'
import { Link } from 'react-router-dom'

function CockItem({item}) {
	return (
		<>
			<li key={item.idDrink}>
				<Link to={`/cocktail/${item.strDrink}/${item.idDrink}`}>
				{/* <Link to={{pathname:`/cocktail/${item.strDrink}/id=${item.idDrink}`, state : {id: item.idDrink}}}> */}
					<p>{item.strDrink}</p>
					<img src={item.strDrinkThumb} alt={item.strDrink} />
				</Link>
			</li>
		</>
	)
}

export default CockItem