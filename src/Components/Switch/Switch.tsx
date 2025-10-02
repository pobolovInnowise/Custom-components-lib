// import React from 'react';
// import * as styles from './Switch.module.css';
//
//
// const Switch = (props) => {
//
//     return (
//     <label className={styles.switch}>
//         <input type="checkbox" role='switch' checked={props.checked} onChange={props.onChange} disabled={props.disabled}/>
//             <span className={styles.slider}></span>
//     </label>
//
//     );
// };
//
// export default Switch;
import React from 'react';
import * as styles from './Switch.module.css';

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
    return (
        <label className={(styles as any).switch}>
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
            <span className={(styles as any).slider}></span>
        </label>
    );
};

export default Switch;
