import React from 'react';

const CCheckbox = (props) => {


    const [checked, setChecked] = React.useState(props.checked);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <>
            <input type="checkbox" checked={checked} onChange={handleChange} disabled={props.disabled}/>
        </>

    );
};

export default CCheckbox;