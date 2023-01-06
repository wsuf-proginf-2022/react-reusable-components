import './counter.css';
import React, { useState } from 'react';

const Counter = ({ max }) => {
  // const state = useState(0);
  // const number = state[0];
  // const setNumber = state[1];
  // array destructuring
  const [number, setNumber] = useState(0);

  // object destructuring
  // const a = { name: 'a' };
  // const { name } = a;

  const increment = () => {
    setNumber(number + 1);
  };

  const set = (val) => () => {
    setNumber(val);
  };

  return (
    <div className='counter'>
      <button
        className='btn btn-small btn-min'
        onClick={() => {
          setNumber(0);
        }}>
        Min
      </button>
      <button
        className='btn btn-big btn-decrease'
        disabled={number === 0}
        onClick={() => {
          setNumber(number - 1);
        }}>
        &lt;
      </button>
      <div className='counter-value'>{number}</div>
      <button disabled={number === max} className='btn btn-big btn-increase' onClick={increment}>
        &gt;
      </button>
      <button className='btn btn-small btn-max' onClick={set(max)}>
        Max
      </button>
    </div>
  );
};

export default Counter;
