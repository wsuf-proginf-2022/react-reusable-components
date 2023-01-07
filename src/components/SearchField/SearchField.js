import { useState, useRef, useEffect } from 'react';
import './searchfield.css';

const SearchFiled = ({ options = [] }) => {
  // amire rá keresünk
  const [searchTerm, setSearchTerm] = useState('');
  // az a ténylegesen létező elem amit kiválasztunk
  const [selectedItem, setSelectedItem] = useState('');
  const [searchResults, setSearchResults] = useState(options);
  const [opened, setOpened] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(-1);
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

  useEffect(() => {
    console.log('searchTerm: ', searchTerm);
    const results = options.filter((option) => option.includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    // amikor a searchTerm változik, akkor lefut ez a useEffect callback
  }, [searchTerm]);

  function handleInput(input) {
    setSearchTerm(input);
    setOpened(false);
    setSelectedItem(input);
  }

  function findFirst(term) {
    if (term.length < 1) return '';
    const result = options.find((option) => option.startsWith(term.toLowerCase()));
    return result || '';
  }

  function handleKeyEvent(e) {
    if (e.key === 'Enter') {
      const result = findFirst(e.target.value);
      const hovered = document.querySelector('.search-field .hover');
      if (hovered) {
        handleInput(hovered.textContent);
        setOpened(false);
        return;
      }
      if (result) {
        handleInput(result);
      }
    }
    if (e.key === 'ArrowDown') {
      setOpened(true);
      setCursorIndex(cursorIndex < searchResults.length - 1 ? cursorIndex + 1 : cursorIndex);
    }
    if (e.key === 'ArrowUp') {
      setOpened(true);
      setCursorIndex(cursorIndex > 0 ? cursorIndex - 1 : cursorIndex);
    }
  }

  return (
    <div className={`search-field${opened ? '' : ' rounded'}`} ref={container}>
      <span className='search-icon' />
      <input className='input-mask' disabled value={findFirst(searchTerm)} />
      <input
        className='input-real'
        placeholder='Search...'
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          setCursorIndex(-1);
          setOpened(true);
        }}
        onClick={() => {
          setOpened(true);
        }}
        onKeyDown={handleKeyEvent}
      />
      {opened && (
        <div className='options'>
          {searchResults.map((option, index) => (
            <button
              className={`option ${index === cursorIndex ? 'hover' : ''} `}
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
