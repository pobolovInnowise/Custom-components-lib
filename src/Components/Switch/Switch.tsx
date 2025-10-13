import React from 'react';
import * as styles from './Switch.module.css';

type SwitchProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Switch: React.FC<SwitchProps> = ({
                                           checked,
                                           defaultChecked,
                                           disabled = false,
                                           value,
                                           ...rest
                                       }) => {
    return (
        <label className={styles.switch}>
            <input
                type="checkbox"
                role="switch"
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                value={value}
                {...rest}
            />
            <span className={styles.slider}></span>
        </label>
    );
};

export default Switch;
