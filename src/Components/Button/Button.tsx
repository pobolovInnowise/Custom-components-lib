import React from "react";
import * as styles from './Button.module.css';

type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {

    let buttonVariantClass: 'buttonText' | 'buttonContained' | 'buttonOutlined' = 'buttonText';
    if (props.variant === 'contained') buttonVariantClass = 'buttonContained';
    else if (props.variant === 'outlined') buttonVariantClass = 'buttonOutlined';


    let buttonSizeClass: 'sizeSmall' | 'sizeMedium' | 'sizeLarge' = 'sizeSmall';
    if (props.size === 'medium') buttonSizeClass = 'sizeMedium';
    else if (props.size === 'large') buttonSizeClass = 'sizeLarge';


    const clazz = `${styles[buttonVariantClass as keyof typeof styles]} ${styles[buttonSizeClass as keyof typeof styles]}`;


    return (
        <button className={clazz} {...props} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
