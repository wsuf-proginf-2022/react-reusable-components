import { useState, useRef, useEffect } from 'react';
import './searchfield.css';

const SearchFiled = ({ options = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
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

  return (
    <div className={`search-field ${opened ? '' : 'rounded'}`} ref={container}>
      <span className='search-icon' />
      <input
        className='input-real'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setOpened(true);
        }}
      />
      {opened && (
        <div className='options'>
          {searchResults.map((option) => (
            <button className='option' onClick={() => {}} key={option}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFiled;
