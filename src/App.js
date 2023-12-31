import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import BottomNavi from './component/BottomNavi/BottomNavi';
import Ingredi from './pages/Ingredi/Ingredi';
import IngreDetail from './pages/Ingredi/IngreDetail';
import Cocktail from './pages/Cocktail/Cocktail';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import { Context } from './Context';
import CockDetail from './pages/Cocktail/CockDetail';
import Back from './component/Item/Back';
import Community from './pages/Community/Community';

function App() {
	return (
		<Context>
			<BrowserRouter basename='/mycocktailer'>
				<div className='mycocktailer'>
					<Header />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/ingredient' element={<Ingredi />} />
							<Route path='/ingredient/:ingredient' element={<IngreDetail />} />
							<Route path='/cocktail' element={<Cocktail />} />
							<Route path='/cocktail/:cocktail/:id' element={<CockDetail />} />
							<Route path='/community' element={<Community />} />
							<Route path='/mypage' element={<Mypage />} />
							<Route exact path="/" component={Back} />
						</Routes>
					</main>
					<BottomNavi />
				</div>
			</BrowserRouter>
		</Context>
	);
}

export default App;
