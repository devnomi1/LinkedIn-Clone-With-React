import React from "react";
import BackDrop from "./BackDrop";
import ModalPostCard from "./ModalPostCard";

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
