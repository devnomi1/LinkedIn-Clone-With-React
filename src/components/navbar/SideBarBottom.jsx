import React from "react";
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
						<a href="/" className="py-1 d-block">
							<h5 className={`${style.t_14_heading} m-0`}>Talent Solutions</h5>
							<p className={`${style.t_12_text} m-0`}>
								Find, attract and recruit talent
							</p>
						</a>
					</li>
					<li>
						<a className="py-1 d-block" href="">
							<h5 className={`${style.t_14_heading} m-0`}>Sales Solutions</h5>
							<p className={`${style.t_12_text} m-0`}>
								Unlock sales opportunities
							</p>
						</a>
					</li>
					<li>
						<a className="py-1 d-block" href="">
							<h5 className={`${style.t_14_heading} m-0`}>
								Post a job for free
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								Get your job in front of quality candidate
							</p>
						</a>
					</li>
					<li>
						<a className="py-1 d-block" href="">
							<h5 className={`${style.t_14_heading} m-0`}>
								Marketing Solutions
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								Acquire customers and grow your business
							</p>
						</a>
					</li>
					<li>
						<a className="py-1 d-block" href="">
							<h5 className={`${style.t_14_heading} m-0`}>
								Learning Solutions
							</h5>
							<p className={`${style.t_12_text} m-0`}>
								develop talent across your organization
							</p>
						</a>
					</li>
				</ul>
				<hr
					className="my-0"
					style={{  width: "100%" }}
				/>
				<ul className="px-4">
					<li>
						<a className="py-3 d-block text-decoration-none " href="">
							Create a Company Page
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default SideBarBottom;
