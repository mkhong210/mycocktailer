import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom'

function Header() {
	return (
		<header className='header_wrap'>
			<div className='inner_h'>
				<Link to='/' className='logo'>
					<img src='../common/Cocktail_logo.png' />
				</Link>
				<div className='search_wrap'> 
					<input type='text' name='search' className='search'></input>
					<button className='search_btn'>
						<img src='../common/Common_search.png' />
					</button>
				</div> 
			</div>
		</header>
	)
}

export default Header;
// export default withRouter(Header);