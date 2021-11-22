import React from "react";
import Center from "./Center/Center";
import LeftAside from "./Leftsidecards/LeftAside";
import RightAside from "./Rightsidecards/RightAside";

function Main() {
	return (
		<div className="wrapper">
			<div className="sidebar">
				<LeftAside />
			</div>
			<div className="main">
				<Center />
			</div>
			<div className="aside">
				<RightAside />
			</div>
		</div>
	);
}

export default Main;
