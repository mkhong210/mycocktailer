import React from 'react'
import { Link } from 'react-router-dom'
import './CockItem.scss'

function CockItem({ item }) {
	return (
		<>
			<li key={item.idDrink} className='cocktail_item'>
				<Link to={`/cocktail/${item.strDrink}/${item.idDrink}`}>
					{/* <Link to={{pathname:`/cocktail/${item.strDrink}/id=${item.idDrink}`, state : {id: item.idDrink}}}> */}
					<div className='item_inner'>
							<div className='drink_img'>
								<img src={`${item.strDrinkThumb}`} alt={item.strDrink} />
								{/* <img src={`${item.strDrinkThumb}/preview`} alt={item.strDrink} /> */}
							</div>
					</div>
					<p>{item.strDrink}</p>
				</Link>
			</li>
		</>
	)
}

export default CockItem