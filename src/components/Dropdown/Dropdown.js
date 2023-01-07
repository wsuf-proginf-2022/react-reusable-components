import { useState, useRef, useEffect } from 'react';
import './dropdown.css';

const Dropdown = ({ options = [] }) => {
  const [selected, setSelected] = useState(options[0]);
  const [opened, setOpened] = useState(false);
  const container = useRef();

  const handleOutsideClick = (event) => {
    if (!container.current.contains(event.target)) setOpened(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className='dropdown-container' ref={container}>
      <button
        className='selected'
        onClick={() => {
          setOpened(!opened);
        }}>
        {selected}
        <span className={`icon ${opened ? 'arrow-up' : 'arrow-down'}`} />
      </button>
      {opened && (
        <div className='options'>
          {options
            .filter((option) => option !== selected)
            .map((option) => (
              <button
                className='option'
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpened(false);
                }}>
                {option}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
