import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSearchBarSubmit(this.state.term)
  }

  render() {
    return(
      <div className="ui blue inverted segment">
        <form className="ui blue inverted form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="search here..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;