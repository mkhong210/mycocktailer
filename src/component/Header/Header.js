import React, { useContext, useRef, useState } from 'react'
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom'
import logo from '../../img/common/Cocktail_logo.png'
import search from '../../img/common/Common_search.png'
import { myContext } from '../../Context';

function Header() {
	const searchBtn = useRef();
	// console.log(searchBtn);
	const { data, fetchFn } = useContext(myContext);
	const navigate = useNavigate();
	const [localData, setLocalData] = useState(null); // 변수 이름을 변경

	const handleSearch = async () => {
		const searchTerm = searchBtn.current.value;
		// console.log(searchTerm);

		const newData = await fetchFn('search', searchTerm);

		setLocalData(newData);

		// navigate('/cocktail');
	};

	// console.log(data)

	return (
		<header className='header_wrap'>
			<div className='inner_h'>
				<Link to='/' className='logo'>
					<img src={logo} />
				</Link>
				{/* <div className='search_wrap'>
					<input type='text' ref={searchBtn} name='search' className='search'></input>
					<button className='search_btn' onClick={handleSearch}>
						<img src={search} />
					</button>
				</div> */}
			</div>
		</header>
	)
}

export default Header;
// export default withRouter(Header);