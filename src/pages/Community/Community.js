import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Community() {
	// const [idata, isetData] = useState(initData);
	// const [delData, setDeldata] = useState();

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_SERVER}/abc`)
			.then(res => {
				// let datas = res.data.filter(n => n.date === date);
				// isetData(datas)
			})
		axios.get(`${process.env.REACT_APP_SERVER}/abc`)
			.then(res => {
				// setDeldata(res.data)
			})
	}, [])

	return (
		<div>Community</div>
	)
}

export default Community