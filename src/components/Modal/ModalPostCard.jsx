import React from "react";
import style from "./ModalPostCard.module.css";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import closebtn from "../../images/close.svg";
import ModalBottom from "../Modal/ModalBottom";

function ModalPostCard(props) {
	return (
		<div className={`m-auto  ${style.modal_post_card}`}>
			<div className="d-flex justify-content-between align-items-center text-start  p-2 border-bottom">
				<div className="h6">Create Your Post</div>
				<div onClick={props.onCancel}>
					<img src={closebtn} alt="" />
				</div>
			</div>
			<div className="d-flex align-items-center">
				<div className={style.modal_img}>
					<img
						className="rounded-circle"
						src={profileimage}
						alt={profileimage}
					/>
				</div>
				<div className="d-flex flex-column">
					<span className="">Nouman Ijaz</span>
					<span className="border border-1 rounded-pill border-dark py-1 px-2">
						<button className="d-flex justify-content-between align-items-center text-center">
							<span>
								<i className="fas fa-globe-asia"></i>
							</span>
							<span className="px-2">Anyone</span>
							<span>
								<i className="fas fa-sort-down"></i>
							</span>
						</button>
					</span>
				</div>
			</div>
			<div className="">
				<textarea
					className={style.text_area}
					name={props.value}
					value={props.value}
					placeholder="What do you want to talk about?"
					onChange={props.onChange}
				></textarea>
			</div>
			<div className={`${style.upload_image} overflow-auto`}>
				<img
					className="img-fluid"
					src={props.image}
					alt={props.image}
					onChange={props.imageChangeHandler}
				/>
			</div>
			<ModalBottom
				onChange={props.imageChangeHandler}
				value={props.value}
				onClick={props.onClick}
			/>
		</div>
	);
}

export default ModalPostCard;
