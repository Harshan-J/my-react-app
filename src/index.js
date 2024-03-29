import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import MyComponent from "./components/MyComponent";
import axios, { Axios } from "axios";
import { BrowserRouter } from "react-router-dom";
import RouterPage from "./RouterPage";

axios.interceptors.request.use((request) => {
	request.headers.Authorization = "my token";
	return request;
});
axios.interceptors.response.use((response) => {
	return response;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>		
			<RouterPage/>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
