import axios from "axios";
import { BASE_URL } from "../constants/api";

const apiMiddleware = () => {
	axios.defaults.baseURL = BASE_URL;
	axios.defaults.headers.common["Content-Type"] = "application/json";
	axios.defaults.timeout = 10000;

	axios
		.request({
			url: "/deputados",
		})
		.then(({ data }) => {
			console.log("onSuccess", data);
		})
		.catch((error) => {
			console.log("Error:", error);

			if (error.response && error.response.status === 403) {
				// dispatch(accessDenied(window.location.pathname));
			}
		})
		.finally(() => {
			// if (label) {
			//   dispatch(apiEnd(label));
			// }
		});
};

export default apiMiddleware;
