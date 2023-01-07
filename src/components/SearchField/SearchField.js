import { useState, useRef, useEffect } from 'react';
import './searchfield.css';

const SearchFiled = ({ options = [] }) => {
  // amire rá keresünk
  const [searchTerm, setSearchTerm] = useState('');
  // az a ténylegesen létező elem amit kiválasztunk
  const [selectedItem, setSelectedItem] = useState('');
  const [searchResults, setSearchResults] = useState(options);
  const [opened, setOpened] = useState(false);
  const container = useRef();

  const handleOutsideClick = (event) => {
    if (!container.current?.contains(event.target)) setOpened(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  function handleInput(input) {
    setSearchTerm(input);
    setOpened(false);
    setSelectedItem(input);
  }

  return (
    <div className={`search-field${opened ? '' : ' rounded'}`} ref={container}>
      <span className='search-icon' />
      <input
        className='input-real'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setOpened(true);
        }}
        onClick={() => {
          setOpened(true);
        }}
      />
      {opened && (
        <div className='options'>
          {searchResults.map((option) => (
            <button
              className='option'
              onClick={() => {
                handleInput(option);
              }}
              key={option}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFiled;
