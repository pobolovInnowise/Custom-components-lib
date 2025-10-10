import React from 'react';
import * as styles from './Switch.module.css';

type CSSModule = { [className: string]: string };

type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  value?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  name,
  id,
  value,
}) => {
  const s = styles as unknown as CSSModule;

  return (
    <label className={s.switch}>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={id}
        value={value}
      />
      <span className={s.slider}></span>
    </label>
  );
};

export default Switch;
