import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandlogo from "../../images/brand.svg";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import searchicon from "../../imgaes/search.svg";
import ProfileNavbarDown from "./ProfileNavbarDown";
import style from "./Navbar.module.css";
import SideBarMain from "./SideBarMain";
import BackDrop from "../Center/BackDrop";

function Navbar() {
	const [profile, setProfile] = useState(false);
		const [sidebar, setSidebar] = useState(false);

	function handleClick() {
		setProfile(!profile);
		
		
	}
function handleWorkClick() {
	setSidebar(!sidebar);
}
	
	return (
		<div>
			<header className={style.navbar}>
				<div className={style.nav_content}>
					<Link to="/" className={style.nav_branding}>
						<img src={brandlogo} alt="" />
					</Link>

					<div className={style.search_bar}>
						<div className={style.search_typeahead}>
							<img className={style.search_icon} src={searchicon} alt="" />
							<input
								className={style.search_input}
								type="search"
								placeholder="Search"
							/>
						</div>
					</div>
					<button
						className={style.search_button}
						aria-label="Click to start a search"
						type="button"
					>
						<li-icon
							aria-hidden="true"
							type="search-icon"
							className={style.search_button_icon}
							size="medium"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								data-supported-dps="24x24"
								fill="currentColor"
								className={style.nav_icon}
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
							</svg>
						</li-icon>
						<div className={style.search_button_text}>Search</div>
					</button>
					<nav>
						<ul className={style.navbar_right}>
							<li className={style.nav_item}>
								<Link
									className={`${style.nav_item_link} ${style.active}`}
									to="/"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="rgb(0, 0, 0, 0.6)"
										className={`${style.nav_icon} ${style.active}`}
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z" />
									</svg>
									<span className={`${style.nav_text} ${style.active}`}>
										Home
									</span>
								</Link>
							</li>
							<li className={style.nav_item}>
								<Link className={style.nav_item_link} to="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="rgb(0,0,0,0.6)"
										className={style.nav_icon}
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z" />
									</svg>
									<span className={style.nav_text}>My Network</span>
								</Link>
							</li>
							<li className={style.nav_item}>
								<Link className={style.nav_item_link} to="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="rgb(0,0,0,0.6)"
										className={style.nav_icon}
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" />
									</svg>
									<span className={style.nav_text}>Jobs</span>
								</Link>
							</li>
							<li className={`${style.nav_item} hide-msg-top-nav`}>
								<Link className={style.nav_item_link} to="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="rgb(0,0,0,0.6)"
										className={style.nav_icon}
										width="24"
										height="24"
										focusable="false"
									>
										<path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z" />
									</svg>
									<span className={style.nav_text}>Messaging</span>
								</Link>
							</li>
							<li className={`${style.nav_item} hide-notify-top-nav`}>
								<Link className={style.nav_item_link} to="/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										data-supported-dps="24x24"
										fill="rgb(0,0,0,0.6)"
										width="24"
										height="24"
										focusable="false"
										className={style.nav_icon}
									>
										<path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z" />
									</svg>
									<span className={style.nav_text}>Notifications</span>
								</Link>
							</li>
							<li className={`${style.nav_item} hide-profile-top-nav`}>
								<button
									className={`${style.nav_item_link} parent-dropdown-prof"`}
									onClick={handleClick}
								>
									<img
										className={style.navbar_icons}
										style={{
											borderRadius: "100%",
											width: "24px",
											height: "24px",
										}}
										src={profileimage}
										alt=""
									/>
									<span
										className={`${style.nav_link} d-flex  justify-content-between`}
									>
										<span className={style.nav_text}> Me</span>
										<i className="fas fa-sort-down"></i>
									</span>
								</button>
								{profile ? <ProfileNavbarDown /> : profile}
							</li>

							<li
								className={`${style.nav_item} ${style.item_left_border} hide-work-top-nav`}
							>
								<button
									className={style.nav_item_link}
									onClick={handleWorkClick}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className=""
									>
										<path fill="none" d="M0 0h24v24H0V0z" />
										<path
											className={style.path_2}
											fill="rgba(0,0,0,0.6)"
											d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
										/>
									</svg>
									<span className={`${style.nav_link} d-flex`}>
										<span className={style.nav_text}> Work</span>
										<i className="fas fa-sort-down fa-1x"></i>
									</span>
								</button>
							</li>
							<li className={style.hide_premium_top_nav}>
								<div className="">
									<Link
										className={`${style.nav_item_link} ${style.premium}`}
										to="/"
									>
										Try Premium for free
									</Link>
								</div>
							</li>
							<div className="position"></div>
							<div className={style.dot_icon}>
								<i className="fas fa-ellipsis-h"></i>
							</div>
						</ul>

						<ul className={`${style.hidden_icons} icons`}>
							<li className="hide-msg">
								<Link to="/">
									<span className={style.nav_icon}>
										<i className="fas fa-comment-dots fa-2"></i>
									</span>
								</Link>
							</li>
							<li className="hide-notify">
								<Link to="/">
									<span className={style.nav_icon}>
										<i className="fas fa-bell fa-2"></i>
									</span>
								</Link>
							</li>
							<li className="hide-profile">
								<Link to="/">
									<img
										className={style.navbar_icons}
										style={{ borderRadius: "100%" }}
										src="imgaes/myprofilejpeg.jpeg"
										alt=""
									/>
								</Link>
							</li>

							<li className="hide-work">
								<Link to="/">
									<img
										className={style.navbar_icons}
										src="imgaes/apps.svg"
										alt=""
									/>
								</Link>
							</li>
							<li className={style.premium}>
								<Link to="/">Try Premium for free</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<SideBarMain onClick={handleWorkClick} sidebar={sidebar} />
			{sidebar ? <BackDrop onClick={handleWorkClick} /> : sidebar}
		</div>
	);
}

export default Navbar;
