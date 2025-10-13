import React from 'react';
import * as styles from  './Checkbox.module.css';

type CheckboxProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    value?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
                                               checked,
                                               defaultChecked,
                                               disabled = false,
                                               onChange,
                                               name,
                                               id,
                                               value,
                                           }) => {
    return (
        <input
            type="checkbox"
            className={styles.checkbox}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            disabled={disabled}
            name={name}
            id={id}
            value={value}
        />
    );
};

export default Checkbox;


