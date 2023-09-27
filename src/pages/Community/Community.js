import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Write from '../../component/Write/Write';
import ListItem from '../../component/Write/ListItem';
import './Community.scss'

function Community() {
	// const [idata, isetData] = useState(initData);
	// const [delData, setDeldata] = useState();

	// useEffect(() => {
	// 	axios.get(`${process.env.REACT_APP_SERVER}/abc`)
	// 		.then(res => {
	// 			// let datas = res.data.filter(n => n.date === date);
	// 			// isetData(datas)
	// 		})
	// 	axios.get(`${process.env.REACT_APP_SERVER}/abc`)
	// 		.then(res => {
	// 			// setDeldata(res.data)
	// 		})
	// }, [])

	const [data, setData] = useState([]);

	const getData = () => {
		axios.get(`${process.env.REACT_APP_SERVER}/commu_list`)
			// 09.04 cloudtype 으로 서버 했을 떄 
			// axios.get('https://port-0-jsonserver-6w1j2alm48bhk2.sel5.cloudtype.app/abc')
			// axios.get('http://localhost:3030')
			.then(res => {
				setData(res.data)
				// console.log(res.data)
			})
	}
	useEffect(() => {
		// useEffect 안에 없으면 파일이 실행됐을 때 아래서 또 실행하고 무한렌더링가능 
		getData();
	}, [data])


	// index.js에서 post 한뒤 여기도 
	// axios.post('http://localhost:3030/insert', {id:100, name: "신규데이터"})

	return (
		<>
			<section className='commu_list'>
				<h2>Community List</h2>
				<div className='inner'>
					<h1>Community</h1>
					<Write />
					<ul>
						{/* data를 list에 보내준다 */}
						<ListItem data={data} setData={setData} />
					</ul>
				</div>
			</section>
		</>
	);
}

export default Community