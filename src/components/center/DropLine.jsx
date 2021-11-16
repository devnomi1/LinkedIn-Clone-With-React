import style from "./DropLine.module.css";

function DropLine(props) {
	return (
		<>
			<div className="d-flex align-items-center justify-content-between mb-2 position-relative">
				<button
					className={`${style.dropdown_btn} d-flex justify-content-center align-items-center m-1 p-0 border-0`}
					onClick={props.onClick}
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
				{props.isOpen ? (
					<div className={style.dropdwon_sort_top}>
						<a className={style.active} href="#">
							Top
						</a>
						<a href="#">Recent</a>
					</div>
				) : (
					props.isOpen
				)}
			</div>
		</>
	);
}

export default DropLine;
