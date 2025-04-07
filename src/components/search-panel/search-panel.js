import { Component } from 'react';
import './search-paner.scss'

class SearchPanel extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      term: '',
    };
  }

  onUppdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUppdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search employees"
        onChange={this.onUppdateSearch}
      />
    );
  }
}

export default SearchPanel;
