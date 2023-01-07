import { createRoot } from 'react-dom/client';
import React, { StrictMode, useState } from 'react';
// import Counter from './components/Counter/Counter';
import Counter from './components/Counter/CounterClass';
import Dropdown from './components/Dropdown/Dropdown';
// import SearchField from './components/SearchField/SearchField';
import SearchField from './components/SearchField/SearchFieldClass';

const dropdownOptions = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper'
];

const options = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'bell pepper',
  'bilberry',
  'blackberry',
  'blackcurrant',
  'blood orange',
  'blueberry',
  'boysenberry',
  'breadfruit',
  'canary melon',
  'cantaloupe',
  'cherimoya',
  'cherry',
  'chili pepper',
  'clementine',
  'cloudberry',
  'coconut',
  'cranberry',
  'cucumber',
  'currant',
  'damson',
  'date',
  'dragonfruit',
  'durian',
  'eggplant',
  'elderberry',
  'feijoa',
  'fig',
  'goji berry',
  'gooseberry',
  'grape',
  'grapefruit',
  'guava',
  'honeydew',
  'huckleberry',
  'jackfruit',
  'jambul',
  'jujube',
  'kiwi fruit',
  'kumquat',
  'lemon',
  'lime',
  'loquat',
  'lychee',
  'mandarine',
  'mango',
  'mulberry',
  'nectarine',
  'nut',
  'olive',
  'orange',
  'papaya',
  'passionfruit',
  'peach',
  'pear',
  'persimmon',
  'physalis',
  'pineapple',
  'plum',
  'pomegranate',
  'pomelo',
  'purple mangosteen',
  'quince',
  'raisin',
  'rambutan',
  'raspberry',
  'redcurrant',
  'rock melon',
  'salal berry',
  'satsuma',
  'star fruit',
  'strawberry',
  'tamarillo',
  'tangerine',
  'tomato',
  'ugli fruit',
  'watermelon'
];

const App = () => {
  const [count, setCount] = useState(null);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='flex-center'>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      {checked && (
        <>
          <Dropdown options={dropdownOptions} onChange={setSelected} />
          <Counter max={15} onChange={setCount} />
          <h1 style={{ textAlign: 'center' }}>Count: {count}</h1>
          <h1 style={{ textAlign: 'center' }}>Selected: {selected}</h1>
        </>
      )}
      <SearchField options={options} onChange={setSearchTerm} />
      <h1 style={{ textAlign: 'center' }}>Searched: {searchTerm}</h1>
    </div>
  );
};

// https://reactjs.org/docs/strict-mode.html
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
