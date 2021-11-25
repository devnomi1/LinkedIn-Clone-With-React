import React from "react";
import BackDrop from "../PostCards/BackDrop"
import ModalPostCard from "../Modal/ModalPostCard";

function ModalCard(props) {
	return (
		<div>
			<ModalPostCard
				value={props.value}
				onCancel={props.onCancel}
				onClick={props.onClick}
				onChange={props.onChange}
				image={props.image}
				imageChangeHandler={props.imageChangeHandler}
			/>
			<BackDrop onCancel={props.onCancel} />
		</div>
	);
}

export default ModalCard;
