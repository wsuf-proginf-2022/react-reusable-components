import { useState } from 'react';
import './searchfield.css';

const SearchFiled = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='search-field rounded'>
      <span className='search-icon' />
      <input className='input-real' placeholder='Search...' />
    </div>
  );
};

export default SearchFiled;
