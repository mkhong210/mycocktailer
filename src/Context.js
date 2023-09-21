import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const myContext = createContext();



function Context({ children }) {
	const [data, setData] = useState([]);

	let cockdb = axios.create({
		baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
	})

	const fetchFn = async (type, ingredi) => {
		let res, viewData;

		switch (type) {
			// case "search":
			// 	res = await cockdb.get(`/search/${program}?query=${search}`);
			// 	viewData = res.data.results;
			// 	break;

			case "get":
				res = await cockdb.get(`/list.php?i=list`);
				viewData = res.data.drinks;
				break;

			case "filter":
				res = await cockdb.get(`/filter.php?i=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "cock_a":
				res = await cockdb.get(`/filter.php?c=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "cock_detail":
				res = await cockdb.get(`/lookup.php?i=${ingredi}`);
				viewData = res.data.drinks;
				break;

			default:
				res = await cockdb.get(`/list.php?i=list`);
				viewData = res.data.drinks;
		}
		// fetchFn({ type, d: viewData });
		setData(viewData);
		// console.log(viewData);
		// if (viewData) {
    //     setData(viewData);
    //     console.log(viewData);
    // }
	}

	useEffect(() => {
		fetchFn('get');
	}, []);

	return (
		<myContext.Provider value={{ data, fetchFn }}>
			{children}
		</myContext.Provider>
	)
}

export { Context, myContext }