import React from "react";
import style from "./LeftSideCard1.module.css";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import itemicon from '../../images/itemIcon.svg'

function LeftSideCard1() {
	return (
		<div className={`${style.card_1} d-flex flex-column mb-2 `}>
			<a className={style.display_picture}>
				<div className={style.background_img}></div>
				<div className={style.pro_img}>
					<img
						className={`rounded-circle position-absolute translate-middle`}
						src={profileimage}
						alt=""
					/>
				</div>

				<div className={`${style.dp_name} mt-5 pt-2 text-center`}>Nouman Ijaz</div>
			</a>
			<p className={style.dp_info}>
				Internee Engineer at Descon Engineering Limited
			</p>
			<div className="d-flex flex-column border-top justify-content-center py-2">
				<div className={`d-flex justify-content-between px-3  ${style.t_size}`}>
					<p className="m-0 py-1">Who viewed your profile</p>
					<p className={`${style.blue} m-0 py-1`}>4</p>
				</div>
				<div className={`d-flex justify-content-between px-3  ${style.t_size}`}>
					<p className="m-0 py-1">Views of your post</p>
					<p className={`${style.blue} m-0 py-1`}>40</p>
				</div>
			</div>
			<a className={`border-top  ${style.linked}`}>
				<p className={`m-0 text-start ${style.normal_t}`}>
					Access exclusive tools & nsights
				</p>
				<div className="d-flex align-items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						data-supported-dps="24x24"
						className="mercado-match"
						width="16"
						height="16"
						focusable="false"
					>
						<path
							d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
							fill="#f8c77e"
						></path>
						<path
							d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
							fill="#e7a33e"
						></path>
					</svg>

					<p className={`${style.skill} m-0`}>Learn New Skills with Premium</p>
				</div>
			</a>
			<a
				className={`border-top d-flex align-items-center ${style.linked}`}
				href="/"
			>
				<div>
				<img src={itemicon} alt="" />
				</div>
				<div className={style.my_item}>My item</div>
			</a>
		</div>
	);
}

export default LeftSideCard1;
