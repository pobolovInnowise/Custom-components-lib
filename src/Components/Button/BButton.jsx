import React from "react";
import styles from "./BButton.module.css";

const BButton = (props) => {

    let clazz = '';
    let buttonVariant = 'buttonText'; //default value
    if(props.variant === 'text') buttonVariant = 'buttonText';
    else if(props.variant === 'contained') buttonVariant = 'buttonContained';
    else if(props.variant === 'outlined') buttonVariant = 'buttonOutlined';

    let buttonSize = 'sizeSmall';//default value
    if(props.size === 'small') buttonSize = 'sizeSmall';
    else if(props.size === 'medium') buttonSize = 'sizeMedium';
    else if(props.size === 'large') buttonSize = 'sizeLarge';


    clazz = `${styles[buttonVariant]} ${styles[buttonSize]} `;


    return (
        <button className={clazz} {...props}>
            {props.children}
        </button>
    );
};


export default BButton;


