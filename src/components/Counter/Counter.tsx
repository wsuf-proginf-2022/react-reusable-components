import './counter.css';
import React, { FunctionComponent, useState } from 'react';

interface CounterProps {
  min: number;
  max: number;
  onChange: (val: number) => void;
}

const Counter: FunctionComponent<CounterProps> = ({ max = 10, min = 0, onChange = () => {} }) => {
  // const state = useState(0);
  // const number = state[0];
  // const setNumber = state[1];
  // array destructuring
  const [number, setNumber] = useState(min);

  // object destructuring
  // const a = { name: 'a' };
  // const { name } = a;

  const increment = () => {
    setNumber(number + 1);
    onChange(number + 1);
  };

  const set = (val: number) => () => {
    setNumber(val);
    onChange(val);
  };

  return (
    <div className='counter'>
      <button
        className='btn btn-small btn-min'
        onClick={() => {
          setNumber(min);
          onChange(min);
        }}>
        Min
      </button>
      <button
        className='btn btn-big btn-decrease'
        disabled={number === min}
        onClick={() => {
          setNumber(number - 1);
          onChange(number - 1);
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
