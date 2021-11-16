import React from 'react'
import style from "./InnerCard.module.css"

function InnerCard() {
    return (
			<div>
				<ul className={style.inner_list}>
					<li className="d-flex align-items-center py-1 px-3">
						<a className="d-flex align-items-center" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								data-supported-dps="16x16"
								fill="currentColor"
								width="16"
								height="16"
								focusable="false"
							>
								<path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
							</svg>
							<span className="ms-1">electrical</span>
						</a>
					</li>
					<li className="d-flex align-items-center py-1 px-3">
						<a className="d-flex align-items-center" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								data-supported-dps="16x16"
								fill="currentColor"
								width="16"
								height="16"
								focusable="false"
							>
								<path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
							</svg>
							<span className="ms-1">jobs</span>
						</a>
					</li>
					<li className="d-flex align-items-center py-1 px-3">
						<a className="d-flex align-items-center" href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								data-supported-dps="16x16"
								fill="currentColor"
								className=""
								width="16"
								height="16"
								focusable="false"
							>
								<path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
							</svg>
							<span className="ms-1">project</span>
						</a>
					</li>
					<li className="d-flex align-items-center py-1 px-3">
						<a className="d-flex align-items-center" href="#">
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
								<path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
							</svg>
							<span className="ms-1">engineering</span>
						</a>
					</li>
					<li className="d-flex align-items-center py-1 px-3">
						<a className="d-flex align-items-center" href="#">
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
								<path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
							</svg>
							<span className="ms-1">hiring</span>
						</a>
					</li>
				</ul>
			</div>
		);
}

export default InnerCard
