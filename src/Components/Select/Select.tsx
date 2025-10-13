import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as styles from './Select.module.css';

type SelectProps = {
    options: string[];
    value?: string;
    onChange?: (value: string) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

const Select: React.FC<SelectProps> = ({ options, value, onChange, ...rest }) => {
    const [val, setVal] = useState<string>(value ?? options[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleOptionClick = useCallback(
        (option: string) => {
            setVal(option);
            setIsOpen(false);
            if (onChange) onChange(option);
        },
        [onChange]
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.wrapper} ref={wrapperRef} {...rest}>
            <div className={styles.trigger} onClick={() => setIsOpen((prev) => !prev)}>
                <span>{val}</span>
                <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
            </div>

            <div className={`${styles.options} ${isOpen ? styles.optionsOpen : ''}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`${styles.option} ${option === val ? styles.optionSelected : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;
