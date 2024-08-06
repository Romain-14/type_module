import { baseUrl } from "./const.js";

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const newUrl = () => baseUrl + "3/movie/";

export { getRandomInteger };