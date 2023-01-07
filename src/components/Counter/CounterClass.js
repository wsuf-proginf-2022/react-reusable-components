import './counter.css';
import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { number: 0 };
  // }

  state = { number: 0 };

  increment() {
    this.setState({ number: this.state.number + 1 });
    this.props.onChange(this.state.number + 1);
  }

  set(val) {
    return () => {
      this.setState({ number: val });
      this.props.onChange(val);
    };
  }
  render() {
    const { min, max, onChange } = this.props;
    const { number } = this.state;
    return (
      <div className='counter'>
        <button
          className='btn btn-small btn-min'
          onClick={() => {
            this.setState({ number: min });
            this.props.onChange(min);
          }}>
          Min
        </button>
        <button
          className='btn btn-big btn-decrease'
          disabled={number === min}
          onClick={() => {
            this.setState({ number: number - 1 });
            onChange(number - 1);
          }}>
          &lt;
        </button>
        <div className='counter-value'>{number}</div>
        <button
          disabled={number === max}
          className='btn btn-big btn-increase'
          onClick={() => {
            this.increment();
          }}>
          &gt;
        </button>
        <button className='btn btn-small btn-max' onClick={this.set(max)}>
          Max
        </button>
      </div>
    );
  }
}

Counter.defaultProps = {
  min: 0,
  max: 10,
  onChange: () => {}
};

export default Counter;
