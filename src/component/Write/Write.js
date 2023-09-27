import axios from 'axios';
import React from 'react'

function Write() {
  const insert = (e) => {
		e.preventDefault();

		let msg = e.target.msg.value;
		// server index.js 에 보면 post /insert 에 해달라고 한거 있음 
		axios.post(`${process.env.REACT_APP_SERVER}/insert`, { msg })
			.then(res => {
				console.log(res.data);
			})

		// console.log(e.target.msg.value)
    e.target.msg.value = '';
	}
	return (
		<div className='write_wrap'>
      <h2 className='lang_kr'>여러분의 이야기를 공유해 주세요!</h2>
			<form onSubmit={insert} className='write_form'>
				{/* <input type="text" name="title" /> */}
				<input type="text" name="msg" autoComplete="off" />
				<input type="submit" name="저장" />
			</form>
		</div>
	)
}

export default Write