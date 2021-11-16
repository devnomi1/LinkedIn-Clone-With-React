import React from "react";
import Center from "./center/Center";
import LeftAside from "./leftsidecard/LeftAside";
import RightAside from "./right/RightAside";

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
