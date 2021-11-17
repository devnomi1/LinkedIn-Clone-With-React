import React from "react";
import { Link } from "react-router-dom";
import style from "./SideBarTop.module.css"

function SideBarBottom() {
	return (
		<section className={style.section}>
			<header className={style.header} role="list">
				<h2 className="">LinkedIn Business Services</h2>
			</header>
			<div className="">
				<ul className="px-4">
					<li className="">
						<Link to="/" className="py-1 d-block">
							<h5 className={`${style.t_14_heading} m-0`}>Talent Solutions</h5>
							<p className={`${style.t_12_text} m-0`}>
								Find, attract and recruit talent
							</p>
						</Link>
					</li>
					<li>
						<Link className="py-1 d-block" to="/">
							<h5 className={`${style.t_14_heading} m-0`}>Sales Solutions</h5>
							<p className={`${style.t_12_text} m-0`}>
								Unlock sales opportunities
							</p>
						</Link>
					</li>
					<li>
						<Link className="py-1 d-block" to="/">
							<h5 className={`${style.t_14_heading} m-0`}>
								Post a job for free
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								Get your job in front of quality candidate
							</p>
						</Link>
					</li>
					<li>
						<Link className="py-1 d-block" to="/">
							<h5 className={`${style.t_14_heading} m-0`}>
								Marketing Solutions
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								Acquire customers and grow your business
							</p>
						</Link>
					</li>
					<li>
						<Link className="py-1 d-block" to="/">
							<h5 className={`${style.t_14_heading} m-0`}>
								Learning Solutions
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								develop talent across your organization
							</p>
						</Link>
					</li>
				</ul>
				<hr
					className="my-0"
					style={{  width: "100%" }}
				/>
				<ul className="px-4">
					<li>
						<Link className="py-3 d-block text-decoration-none " to="/">
							Create a Company Page
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default SideBarBottom;
