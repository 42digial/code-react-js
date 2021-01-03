import React, { useEffect } from "react";
import apiMiddleware from "../services/api";
import "./style.css";

function App() {
	useEffect(() => {
		apiMiddleware();
	}, []);
	return (
		<div className="app">
			<h1>Meu app em reactjs</h1>
		</div>
	);
}

export default App;
