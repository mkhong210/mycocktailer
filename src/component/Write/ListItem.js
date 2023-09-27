import axios from 'axios'
import React from 'react'

function ListItem({ data, setData }) {
  const remove = (id) => {
		// console.log(id)
		// console.log(setData)

		let deldata = data.filter(obj => obj.id !== id)
		axios.post(`${process.env.REACT_APP_SERVER}/del`,{deldata})
			.then(res => {
				console.log(res.data);
				setData(res.data);
			})
	}

	return (
		<>
			{
				data.map(obj => (
					<li key={obj.id}>
						{obj.msg}
						<button onClick={() => { remove(obj.id) }}>삭제</button>
					</li>
				))
			}
		</>
	)
}

export default ListItem