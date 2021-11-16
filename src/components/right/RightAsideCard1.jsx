import React from 'react';
import style from "./RightAsideCard1.module.css"

function RightAsideCard1() {
    return (
			<div>
				<div
					className={`${style.top_course} d-flex flex-column justify-content-center py-2 mb-2`}
				>
					{/* -- Heading of top course -- */}
					<div
						className="px-2 mx-1 pb-1 d-flex justify-content-between align-items-center"
					>
						<h2 className={style.top_crs_heading}>Today's top Course</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							data-supported-dps="16x16"
							fill="currentColor"
							className="mercado-match"
							width="16"
							height="16"
							focusable="false"
						>
							<path
								fill="Rgba(0,0 ,0 , 0.6)"
								d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"
							></path>
						</svg>
					</div>
					{/* -- Subheading of top Course -- */}
					<div
						className={`${style.top_crs_subheading} d-flex justify-content-between mt-1`}
					>
						<a href="#">
							<div className={style.large_text}>
								1. Customer Services Foundations
							</div>
							<div className={`${style.small_text} text-start pt-1 ps-3`}>Seth Godin</div>
						</a>
					</div>
					{/* -- Subheding of tio course -- */}
					<div
						className={`${style.top_crs_subheading} d-flex justify-content-between mt-1`}
					>
						<a href="#">
							<div className={style.large_text}>2. What is Graphic Design?</div>
							<div className={`${style.small_text} text-start pt-1 ps-3`}>Sean Adams</div>
						</a>
					</div>
					{/* -- Subheding of tio course -- */}
					<div
						className={`${style.top_crs_subheading} d-flex justify-content-between mt-1`}
					>
						<a href="#">
							<div className={style.large_text}>3. Agile Foundations</div>
							<div className={`${style.small_text} text-start pt-1 ps-3`}>Doug Rose</div>
						</a>
					</div>

					<div className={style.top_crs_link}>
						<a
							tabIndex="0"
							target="_blank"
							href="#"
							id="ember1158"
							className={`${style.top_crs_inner} p-1 d-flex align-items-center`}
						>
							<p>Show more on LinkedIn Learning</p>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								data-supported-dps="16x16"
								fill="currentColor"
								width="16"
								height="16"
								focusable="false"
							>
								<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		);
}

export default RightAsideCard1;
