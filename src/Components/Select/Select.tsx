import React, { useState } from 'react';

type SelectProps = {
    options: string[];
};

const Select: React.FC<SelectProps> = (props) => {
    const [val, setVal] = useState<string>(props.options[0]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setVal(event.target.value);
    };

    return (
        <div>
            <select value={val} onChange={handleChange}>
                {props.options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {val === 'none' ? '' : `Hi, ${val}`}
            </div>
        </div>
    );
};

export default Select;

