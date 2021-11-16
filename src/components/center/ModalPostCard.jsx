import React, { useState, useEffect } from "react";
import style from "./ModalPostCard.module.css";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import closebtn from "../../images/close.svg";
import ModalBottom from "./ModalBottom";
import { DUMMY_DATA } from "./Center";

function ModalPostCard(props) {
	const [state, setState] = useState([""]);
	const [textAreaValue, setTextAreaValue] = useState([""]);

	const postHandler = (e) => {
		e.preventDefault();
		const value = setTextAreaValue(e.target.value);
		setTextAreaValue((prevItem) => {
			const preValue = [...prevItem , value];
			
		});
	};

	const changeValueHandler = (e) => {
		setTextAreaValue(e.target.value);
	};

	const imageReaderHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setState(reader.result);
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
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
								<i class="fas fa-globe-asia"></i>
							</span>
							<span className="px-2">Anyone</span>
							<span>
								<i class="fas fa-sort-down"></i>
							</span>
						</button>
					</span>
				</div>
			</div>
			<div className="">
				<textarea
					className={style.text_area}
					name=""
					id=""
					value={textAreaValue}
					placeholder="What do you want to talk about?"
					onChange={changeValueHandler}
				></textarea>
			</div>
			<div className="overflow-auto" onChange={changeValueHandler}>
				{state}
			</div>
			<ModalBottom
				onChange={imageReaderHandler}
				value={textAreaValue}
				onClick={postHandler}
			/>
		</div>
	);
}

export default ModalPostCard;
