import React, { useState } from "react";
import style from "./ModalPostCard.module.css";
import profileimage from "../../imgaes/myprofilejpeg.jpeg";
import closebtn from "../../images/close.svg";
import ModalBottom from "./ModalBottom";


function ModalPostCard(props) {
	const [dummyData, setDummyData] = useState();
	const [textAreaValue, setTextAreaValue] = useState("");
	const [modalBoxDataHolder, setModalBoxDataHolder] = useState(
		"https://www.freeiconspng.com/images/profile-icon-png"
	);

	const changeValueHandler = (e) => {
		setTextAreaValue(e.target.value);
	};


	const postHandler = (e) => {
		e.preventDefault();
		const textValue = setTextAreaValue(e.target.title.value);
		console.log(
			"Hello I am here",
			e,
			e.target.title,
			e.target.name,
			e.target.value
		);
		setDummyData([...dummyData, { [e.title]: textValue }]);

		console.log(textValue);
	};

	const imageReaderHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setModalBoxDataHolder({ pics: reader.result });
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
					name="description"
					id=""
					value={textAreaValue}
					placeholder="What do you want to talk about?"
					onChange={changeValueHandler}
				></textarea>
			</div>
			<div className="overflow-auto" onChange={imageReaderHandler}>
				<img src={modalBoxDataHolder} alt="" />
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
