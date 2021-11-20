import React, {useState} from "react";
import style from "./DropLine.module.css";
import { Link } from "react-router-dom";

function DropLine(props) {
	const [dropLineOpen, setDropLineOpen] = useState(false);

	function toggleHandler() {
		setDropLineOpen(!dropLineOpen);
	}

	return (
		<>
			<div className="d-flex align-items-center justify-content-between mb-2 position-relative">
				<button
					className={`${style.dropdown_btn} d-flex justify-content-center align-items-center m-1 p-0 border-0`}
					onClick={toggleHandler}
				>
					<hr />
					<span className={`${style.sort_by}`}>Sort by:</span>
					<span className="d-flex justify-content-center align-items-center">
						<span className={`${style.top} ms-1`}>Top</span>
						<span>
							<i className="fas fa-sort-down"></i>
						</span>
					</span>
				</button>
				{dropLineOpen ? (
					<div className={style.dropdwon_sort_top}>
						<Link className={style.active} to="/">
							<button>Top</button>
						</Link>
						<Link to="/"><button>Recent</button></Link>
					</div>
				) : (
					dropLineOpen
				)}
			</div>
		</>
	);
}

export default DropLine;
