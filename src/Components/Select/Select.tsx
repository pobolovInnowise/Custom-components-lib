import React, { useState, useCallback, useEffect, useRef } from 'react';

import * as styles from './Select.module.css';

type SelectProps = {
  options: string[];
};

const Select: React.FC<SelectProps> = (props) => {
  const [val, setVal] = useState<string>(props.options[0]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = useCallback((option: string) => {
    setVal(option);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{val}</span>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
      </div>

      <div className={`${styles.options} ${isOpen ? styles.optionsOpen : ''}`}>
        {props.options.map((option, index) => (
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
