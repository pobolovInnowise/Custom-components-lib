import React from 'react';
import * as styles from  './Checkbox.module.css';

type CheckboxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
                                               checked,
                                               defaultChecked,
                                               disabled = false,
                                               ...rest
                                           }) => {
    return (
        <input
            type="checkbox"
            className={styles.checkbox}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            {...rest}
        />
    );
};

export default Checkbox;
