import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return(
      <div className="ui blue inverted segment">
        <form className="ui blue inverted form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="search here..." onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;