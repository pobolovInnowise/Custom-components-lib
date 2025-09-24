import React from 'react';
import styles from "./SSwitch.module.css";


const SSwitch = (props) => {


    const [checked, setChecked] = React.useState(props.checked);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (

    <label className={styles.switch}>
        <input type="checkbox" role='switch' checked={checked} onChange={handleChange} disabled={props.disabled}/>
            <span className={styles.slider}></span>
    </label>

    );
};

export default SSwitch;