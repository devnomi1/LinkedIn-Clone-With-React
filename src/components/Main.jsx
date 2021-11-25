import React from "react";
import CardsHolderCenter from "./PostCards/CardsHolderCenter";
import LeftCards from "./Leftsidecards/LeftCards";
import RightCards from "./Rightsidecards/RightCards";

function Main() {
	return (
		<div className="wrapper">
			<div className="sidebar">
				<LeftCards />
			</div>
			<div className="main">
				<CardsHolderCenter />
			</div>
			<div className="aside">
				<RightCards/>
			</div>
		</div>
	);
}

export default Main;
