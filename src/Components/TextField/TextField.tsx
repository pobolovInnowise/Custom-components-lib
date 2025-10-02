// import * as React from 'react';
// import * as styles from './TextField.module.css'
//
// function TextField(props) {
//     let clazz = '';
//     let classVariant = 'variantOutlined'; //default value
//     if(props.variant === 'filled') classVariant = 'variantFilled';
//     else if(props.variant === 'standard') classVariant = 'variantStandard';
//     else if(props.variant === 'outlined') classVariant = 'variantOutlined';
//
//     let classSize = 'sizeSmall';//default value
//     if(props.size === 'normal') classSize = 'sizeNormal';
//     else if(props.size === 'small') classSize = 'sizeSmall';
//
//     let classMargin = 'marginNone'; //default value
//     if(props.margin === 'normal') classMargin = 'marginNormal';
//     else if(props.margin === 'dense') classMargin = 'marginDense';
//     else if(props.margin === 'none') classMargin = 'marginNone';
//
//
//
//     clazz = `${styles[classVariant]} ${styles[classSize]} ${styles[classMargin]}`;
//
//
//     return (
//         <input className={clazz} type="text" placeholder={props.label}
//                disabled={props.disabled} name={props.name} required={props.required}
//                autoFocus={props.autoFocus} onChange={props.onChange}/>
//     );
// }
//
// export default TextField;
//


import React from 'react';
import * as styles from './TextField.module.css';

type TextFieldVariant = 'filled' | 'standard' | 'outlined';
type TextFieldSize = 'small' | 'normal';
type TextFieldMargin = 'none' | 'dense' | 'normal';

type TextFieldProps = {
    label?: string;
    variant?: TextFieldVariant;
    size?: TextFieldSize;
    margin?: TextFieldMargin;
    disabled?: boolean;
    name?: string;
    required?: boolean;
    autoFocus?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
                                                 label = '',
                                                 variant = 'outlined',
                                                 size = 'small',
                                                 margin = 'none',
                                                 disabled = false,
                                                 name,
                                                 required = false,
                                                 autoFocus = false,
                                                 onChange,
                                             }) => {
    let classVariant: 'variantFilled' | 'variantStandard' | 'variantOutlined' = 'variantOutlined';
    if (variant === 'filled') classVariant = 'variantFilled';
    else if (variant === 'standard') classVariant = 'variantStandard';

    let classSize: 'sizeSmall' | 'sizeNormal' = size === 'normal' ? 'sizeNormal' : 'sizeSmall';

    let classMargin: 'marginNone' | 'marginDense' | 'marginNormal' = 'marginNone';
    if (margin === 'dense') classMargin = 'marginDense';
    else if (margin === 'normal') classMargin = 'marginNormal';

    const clazz = `${styles[classVariant as keyof typeof styles]} ${styles[classSize as keyof typeof styles]} ${styles[classMargin as keyof typeof styles]}`;

    return (
        <input
            className={clazz}
            type="text"
            placeholder={label}
            disabled={disabled}
            name={name}
            required={required}
            autoFocus={autoFocus}
            onChange={onChange}
        />
    );
};

export default TextField;
