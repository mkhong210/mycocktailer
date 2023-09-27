import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react'

const myContext = createContext();

const insert = (state, action) => {
	switch (action.type) {
		case "get": return state;
		case "cock_a": return state;
		case "search_i": return action.d;
		case "more" : return [...state, ...action.d]
		default: return action.d;
	}
}

function Context({ children }) {
	const [data, dispatch] = useReducer(insert, []);

	let cockdb = axios.create({
		baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
	})

	const fetchFn = async (type, ingredi) => {
		try {
		let res, viewData;


		switch (type) {
			// case "search":
			// 	res = await cockdb.get(`/search/${program}?query=${search}`);
			// 	viewData = res.data.results;
			// 	break;

			case "get":
				res = await cockdb.get(`/list.php?i=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "filter":
				res = await cockdb.get(`/filter.php?i=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "cock_a":
				// res = await cockdb.get(`/filter.php?c=${ingredi}`);
				res = await cockdb.get(`/search.php?f=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "cock_detail":
				res = await cockdb.get(`/lookup.php?i=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "search_d":
				res = await cockdb.get(`/search.php?s=${ingredi}`);
				viewData = res.data.drinks;
				break;

			case "search_i":
				res = await cockdb.get(`/search.php?i=${ingredi}`);
				viewData = res.data.ingredients;
				break;

			default:
				res = await cockdb.get(`/list.php?i=list`);
				viewData = res.data.drinks;
		}
		// fetchFn({ type, d: viewData });
		dispatch({  d: viewData });
		console.log(type, res.data.drinks)
	} catch (error) {
		console.error('API 호출 중 오류 발생:', error);
}
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