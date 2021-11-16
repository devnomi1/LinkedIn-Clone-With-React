import React, { useState } from "react";
import InnerCard from "./InnerCard";

import style from "./LeftSideCard2.module.css";

function LeftSideCard2() {
	const [isOpen, setIsOpen] = useState(true);
	const [isShow, setIsShow] = useState(true);
	const [sticky, setSticky] = useState(false)
	function toggleHandler() {
		setIsOpen(!isOpen);
	}
	function toggle1Handler() {
		setIsShow(!isShow);
	}
	
	
	return (
		<>
			
				<div className={style.card_2} >
					<div className="list">
						<div
							className={`${style.item} d-flex align-items-center justify-content-between`}
						>
							<span className={style.recent}>Recent</span>
							<span className={style.down_btn} onClick={toggleHandler}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									data-supported-dps="16x16"
									fill="rgba(0,0,0,0.6)"
									className=""
									width="16"
									height="16"
									focusable="false"
								>
									<path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
								</svg>
							</span>
						</div>
						{isOpen ? <InnerCard /> : isOpen}
					</div>
					<div className={style.left_card_links}>
						<a href="#">Groups</a>
						<a href="#">
							Event
							<span>
								<i className="fas fa-plus"></i>
							</span>
						</a>
						<div
							className={`${style.item} d-flex align-items-center justify-content-between`}
						>
							<a className={style.item_link} href="#">
								Followed Hashtags
							</a>
							<span className={style.down_btn} onClick={toggle1Handler}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									data-supported-dps="16x16"
									fill="rgba(0,0,0,0.6)"
									className=""
									width="16"
									height="16"
									focusable="false"
								>
									<path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
								</svg>
							</span>
						</div>
					</div>
					{isShow ? <InnerCard /> : isShow}
					<div className={style.discover_btn}>
						<button>Discover More</button>
					</div>
				</div>
		</>
	);
}

export default LeftSideCard2;
