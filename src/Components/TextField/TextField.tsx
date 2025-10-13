import React from 'react';
import * as styles from './TextField.module.css';

type TextFieldVariant = 'filled' | 'standard' | 'outlined';
type TextFieldSize = 'small' | 'normal';
type TextFieldMargin = 'none' | 'dense' | 'normal';

type TextFieldProps = {
    label?: string;
    variant?: TextFieldVariant;
    fieldSize?: TextFieldSize;
    margin?: TextFieldMargin;
    value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextFieldProps> = ({
                                                 label = '',
                                                 variant = 'filled',
                                                 fieldSize = 'small',
                                                 margin = 'none',
                                                 disabled = false,
                                                 required = false,
                                                 autoFocus = false,
                                                 value,
                                                 ...rest
                                             }) => {
    const classVariant =
        variant === 'filled' ? styles.variantFilled :
            variant === 'standard' ? styles.variantStandard :
                styles.variantOutlined;

    const classSize = fieldSize === 'normal' ? styles.sizeNormal : styles.sizeSmall;

    const classMargin =
        margin === 'dense' ? styles.marginDense :
            margin === 'normal' ? styles.marginNormal :
                styles.marginNone;

    const clazz = `${classVariant} ${classSize} ${classMargin}`;

    return (
        <input
            type="text"
            className={clazz}
            placeholder={label}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            value={value}
            {...rest}
        />
    );
};

export default TextField;
