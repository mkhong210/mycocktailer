import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNavi.scss'

function BottomNavi() {
	return (
		<footer>
			<div className='inner_b'>
				<div className='navi_item'>
					<Link to='/ingredient'>
						<img src='../../common/Common_ingredi.png' />
						<p>재료</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/cocktail'>
						<img src='../../common/Common_cocktail.png' />
						<p>칵테일</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/'>
						<img src='../../common/Common_home.png' />
						<p>홈</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/community'>
						<img src='../../common/Common_community.png' />
						<p>커뮤니티</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/mypage'>
						<img src='../../common/Common_user.png' />
						<p>마이페이지</p>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default BottomNavi