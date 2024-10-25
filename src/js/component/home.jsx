import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ color, setColor] = useState(null);
	const colors = ["red","yellow","green"];
	const [index , setindex] = useState(0);

	const [magic , setMagic] = useState(0);
	const num = [0,1];

	const changeMagic = () => {
		const changeNum = (magic+1) % num.length;
		setMagic(num[changeNum]);
	};

	const changeLigth = () => {
		
		const nextIndex = (index +1) % colors.length;
		setColor(colors[nextIndex]);
		setindex(nextIndex);


	}

	return (
		<>
		
		
		<div className="container" style={{filter: magic === 1 ? "drop-shadow(0 0mm 20mm purple)" : "none"}}>
			<div className="redLigth" style={{filter: color === "red" ? "drop-shadow(0 0 10mm red)" : "none"}}></div>
			<div className="yellowLigth" style={{filter: color === "yellow" ? "drop-shadow(0 0 10mm yellow)" : "none"}}></div>
			<div className="greenLigth" style={{filter: color === "green" ? "drop-shadow(0 0 10mm green)" : "none"}}></div>

		</div>

		<div className="buttons">
			<button onClick={changeLigth} className="btn btn-warning">Cambiar Luz</button>
			<button className="btn btn-dark" onClick={changeMagic}>Magic</button>
		</div>

		</>
	);
};

export default Home;
