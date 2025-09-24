import React from "react";
import styles from "./BButton.module.css";

const BButton = (props) => {

    let clazz = '';
    if (props.variant === 'text') clazz = styles.button_text;
    else if(props.variant === 'contained') clazz = styles.button_contained;
    else if(props.variant === 'outlined') clazz = styles.button_outlined;

    return (
        <>
            <button className={clazz}>
                {props.children}
            </button>
        </>

    )
}


export default BButton;