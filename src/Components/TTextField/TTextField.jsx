import * as React from 'react';
import styles from './TTextField.module.css'

function TTextField(props) {
    let clazz = '';
    let classVariant = 'variantOutlined'; //default value
    if(props.variant === 'filled') classVariant = 'variantFilled';
    else if(props.variant === 'standard') classVariant = 'variantStandard';
    else if(props.variant === 'outlined') classVariant = 'variantOutlined';

    let classSize = 'sizeSmall';//default value
    if(props.size === 'normal') classSize = 'sizeNormal';
    else if(props.size === 'small') classSize = 'sizeSmall';

    let classMargin = 'marginNone'; //default value
    if(props.margin === 'normal') classMargin = 'marginNormal';
    else if(props.margin === 'dense') classMargin = 'marginDense';
    else if(props.margin === 'none') classMargin = 'marginNone';



    clazz = `${styles[classVariant]} ${styles[classSize]} ${styles[classMargin]}`;


    return (
        <input className={clazz} type="text" placeholder={props.label}
               disabled={props.disabled} name={props.name} required={props.required}
               autoFocus={props.autoFocus} />
    );
}

export default TTextField;


// Минимальный набор дефолтных HTML input атрибутов:
// type есть
// value / defaultValue есть
// placeholder есть
// onChange
// disabled есть
// name есть
// required есть
// autoFocus есть
//
// И дополнительный проп:
// error: boolean → если true, то поле должно подсвечиваться как с ошибкой (например, красная рамка).