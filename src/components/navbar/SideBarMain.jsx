import React from "react";

import SideBarBottom from "./SideBarBottom";
import style from  "./SideBarMain.module.css";
import SideBarTop from "./SideBarTop";

function SideBarMain(props) {
	return (
		<div>
			<div className={props.sidebar ? `${style.sidebar} ${style.active}` : `${style.sidebar}`}>
				<div className={style.sidebar_content}>
					<div className={`text-end p-2 position-absolute ${style.close_btn}`} >
						<button
							className="btn-close shadow-none "
							onClick={props.onClick}
						></button>
					</div>
					<SideBarTop />
					<SideBarBottom />
				</div>
			</div>
		</div>
	);
}

export default SideBarMain;
