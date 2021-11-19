import React from 'react'
import BackDrop from './BackDrop'
import ModalPostCard from './ModalPostCard'

function ModalCard(props) {

    return (
			<div>
			<ModalPostCard onCancel={props.onCancel} onClick={props.onClick}/>
				<BackDrop onCancel={props.onCancel} />
			</div>
		);
}

export default ModalCard
