import React from 'react';
import style from "./ModalPostCard.module.css"

function BackDrop(props) {
    return (
        <div onClick={props.onCancel} className={style.back_drop}>
            
        </div>
    )
}

export default BackDrop;
