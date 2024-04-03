import React from 'react'
import { Link } from 'react-router-dom'
import './BottomNavi.scss'
import ingredi from '../../img/common/Common_ingredi.png'
import cocktail from '../../img/common/Common_cocktail.png'
import home from '../../img/common/Common_home.png'
import community from '../../img/common/Common_community.png'
import user from '../../img/common/Common_user.png'

function BottomNavi() {
	return (
		<footer className='footer_wrap'>
			<div className='inner_b'>
				<div className='navi_item'>
					<Link to='/'>
						<img src={home} />
						<p>홈</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/ingredient'>
						<img src={ingredi} />
						<p>재료</p>
					</Link>
				</div>
				<div className='navi_item'>
					<Link to='/cocktail'>
						<img src={cocktail} />
						<p>칵테일</p>
					</Link>
				</div>
				{/* <div className='navi_item'>
					<Link to='/community'>
						<img src={community} />
						<p>커뮤니티</p>
					</Link>
				</div> */}
				{/* <div className='navi_item'>
					<Link to='/mypage'>
						<img src={user} />
						<p>마이페이지</p>
					</Link>
				</div> */}
			</div>
		</footer>
	)
}

export default BottomNavi