import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom'
import logo from '../../img/common/Cocktail_logo.png'
import search from '../../img/common/Common_search.png'

function Header() {
	return (
		<header className='header_wrap'>
			<div className='inner_h'>
				<Link to='/' className='logo'>
					<img src={logo} />
				</Link>
				<div className='search_wrap'> 
					<input type='text' name='search' className='search'></input>
					<button className='search_btn'>
						<img src={search} />
					</button>
				</div> 
			</div>
		</header>
	)
}

export default Header;
// export default withRouter(Header);