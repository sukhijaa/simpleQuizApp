import axios from 'axios';

const isDevelopment = process.env.NODE_ENV === 'development';

export const APIEndpoints = {
	GET_QUIZ_QUESTIONS: 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
};

export const buildURL = (path, pathParams = {}, queryParams = {}) => {
	Object.keys(pathParams).forEach(key => {
		path = path.replace(`:${key}`, encodeURIComponent(pathParams[key]));
	});
	Object.keys(queryParams)
		.filter(key => queryParams[key] !== null && typeof queryParams[key] !== 'undefined')
		.forEach((key, index) => {
			const param = encodeURIComponent(queryParams[key]);

			if (index === 0) {
				path = path + `?${key}=${param}`;
			} else {
				path = path + `&${key}=${param}`;
			}
		});
	return path;
};

const appendHost = url => url

export const HTTP = {
	DELETE: (url) => {
		return axios.post(appendHost(url), {token: sessionStorage.token || ''});
	},
	POST: (url, body, needToken = true) => {
		return axios.post(appendHost(url), needToken ? {token: sessionStorage.token || '', body} : {body});
	},
	GET: (url) => {
		return axios.get(appendHost(url));
	},
};