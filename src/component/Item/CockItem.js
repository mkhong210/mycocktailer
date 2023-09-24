import React from 'react'
import { Link } from 'react-router-dom'
import './CockItem.scss'

function CockItem({item}) {
	return (
		<>
			<li key={item.idDrink} className='cocktail_item'>
				<Link to={`/cocktail/${item.strDrink}/${item.idDrink}`}>
				{/* <Link to={{pathname:`/cocktail/${item.strDrink}/id=${item.idDrink}`, state : {id: item.idDrink}}}> */}
					<img src={item.strDrinkThumb} alt={item.strDrink} />
					<p>{item.strDrink}</p>
				</Link>
			</li>
		</>
	)
}

export default CockItem