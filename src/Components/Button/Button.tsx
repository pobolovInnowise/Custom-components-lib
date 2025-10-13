import React from 'react';
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

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
                                                                                           variant = 'text',
                                                                                           size = 'small',
                                                                                           disabled = false,
                                                                                           children,
                                                                                           ...rest
                                                                                       }) => {
    const variantClass =
        variant === 'contained' ? styles.buttonContained :
            variant === 'outlined' ? styles.buttonOutlined :
                styles.buttonText;

    const sizeClass =
        size === 'medium' ? styles.sizeMedium :
            size === 'large' ? styles.sizeLarge :
                styles.sizeSmall;

    const clazz = `${variantClass} ${sizeClass}`;

    return (
        <button className={clazz} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;

