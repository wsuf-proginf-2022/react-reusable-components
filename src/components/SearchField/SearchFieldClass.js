import { Component, createRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import './searchfield.css';

class SearchField extends Component {
  state = {
    opened: false,
    searchTerm: '',
    searchResults: this.props.options,
    selectedItem: '',
    cursorIndex: -1
  };
  container = createRef();

  handleOutsideClick = (event) => {
    if (!this.container?.current.contains(event.target)) this.setState({ opened: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedItem !== this.state.selectedItem) {
      this.props.onChange(this.state.selectedItem);
    }
    if (prevState.cursorIndex !== this.state.cursorIndex) {
      if (this.state.cursorIndex === -1) return;
      const el = document.querySelector('.search-field .hover');
      if (el) scrollIntoView(el, { scrollMode: 'if-needed', block: 'end' });
    }
    if (prevState.searchTerm !== this.state.searchTerm) {
      const results = this.props.options.filter((option) => option.includes(this.state.searchTerm.toLowerCase()));
      this.setState({ searchResults: results });
    }
  }
  handleInput(input) {
    this.setState({ searchTerm: input, opened: false, selectedItem: input });
  }

  findFirst(term) {
    if (term.length < 1) return '';
    const result = this.props.options.find((option) => option.startsWith(term.toLowerCase()));
    return result || '';
  }

  handleKeyEvent = (e) => {
    if (e.key === 'Enter') {
      const result = this.findFirst(e.target.value);
      const hovered = document.querySelector('.search-field .hover');
      if (hovered) {
        this.handleInput(hovered.textContent);
        this.setState({ opened: false });
        return;
      }
      if (result) {
        this.handleInput(result);
      }
    }
    if (e.key === 'ArrowDown') {
      this.setState({ opened: true });

      this.setState(({ cursorIndex }) => {
        return {
          cursorIndex: cursorIndex < this.state.searchResults.length - 1 ? cursorIndex + 1 : cursorIndex
        };
      });
    }
    if (e.key === 'ArrowUp') {
      this.setState({ opened: true });
      this.setState(({ cursorIndex }) => {
        return {
          cursorIndex: cursorIndex > 0 ? cursorIndex - 1 : cursorIndex
        };
      });
    }
  };
  render() {
    const { opened, searchTerm, searchResults, cursorIndex } = this.state;
    return (
      <div className={`search-field${opened ? '' : ' rounded'}`} ref={this.container}>
        <span className='search-icon' />
        <input className='input-mask' disabled value={this.findFirst(searchTerm)} />
        <input
          className='input-real'
          placeholder='Search...'
          value={searchTerm}
          onChange={(event) => {
            this.setState({ searchTerm: event.target.value, cursorIndex: -1, opened: true });
          }}
          onClick={() => {
            this.setState({ opened: true });
          }}
          onKeyDown={this.handleKeyEvent}
        />
        {opened && (
          <div className='options'>
            {searchResults.map((option, index) => (
              <button
                className={`option ${index === cursorIndex ? 'hover' : ''} `}
                onClick={() => {
                  this.handleInput(option);
                }}
                key={option}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SearchField;
