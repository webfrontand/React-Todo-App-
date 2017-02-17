import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.handleKeyword(e.target.value)
  }
  render(){
    return (
      <div className="row">
      <input
        name="keyword"
        type="text"
        className="validate"
        placeholder="Search..."
        onChange={this.handleChange}
      />
      </div>
    )
  }
}

export default Search;
