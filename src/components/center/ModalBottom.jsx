import React from "react";
import {Link} from "react-router-dom"
import comment from "../../images/comment.svg";
import photoimage from "../../images/image.svg";
import JobIcon from "../../images/myjob.svg";
import style from "./ModalPostCard.module.css";


function ModalBottom(props) {
 
	

	return (
		<div className="">
			<ul className="nav ps-3 pe-4 py-3 ">
				<li className="nav-item" style={{ width: "50px" }}>
					<div className="nav-link active" aria-current="page" >
						<input
							className="d-none"
							type="file"
							id="input"
							name="image-upload"
							accept="image/*"
							onChange={props.onChange}
						/>
						<label htmlFor="input">
							<img src={photoimage} alt="" />
						</label>
					</div>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							datasupporteddps="24x24"
							fill="rgba(0,0,0, 0.6)"
							width="24"
							height="24"
							focusable="false"
						>
							<path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
						</svg>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							datasupportedps="24x24"
							fill="rgba(0,0,0,0.6)"
							className="mercado-match"
							width="24"
							height="24"
							focusable="false"
						>
							<path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
						</svg>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<img src={JobIcon} alt="" />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							datasupportedps="24x24"
							fill="rgba(0,0,0,0.6)"
							className="mercado-match"
							width="24"
							height="24"
							focusable="false"
						>
							<path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
						</svg>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							datasupportedps="24x24"
							fill="rgba(0,0,0,0.6)"
							className="mercado-match"
							width="24"
							height="24"
							focusable="false"
						>
							<path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
						</svg>
					</Link>
				</li>
				<li className="nav-item border-end border-1">
					<Link className="nav-link" to="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							datasupportedps="24x24"
							fill="rgba(0,0,0,0.6)"
							className="mercado-match"
							width="24"
							height="24"
							focusable="false"
						>
							<path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
						</svg>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link d-flex" to="/">
						<img className="me-1" src={comment} alt="" />
						<p className="m-0 text-dark">Anyone</p>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/">
						<button
							className={
								props.value
									? `${style.change_btn} rounded-pill px-4 py-1 text-center`
									: `${style.post_btn} rounded-pill px-4 py-1 text-center`
							}
							onClick={props.onClick}
							type="submit"
						>
							Post
						</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default ModalBottom;
