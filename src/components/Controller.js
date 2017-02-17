import React, { Component } from 'react';

class Controller extends Component {
  render(){
    return (
      <div className="row right-align" >
        <a
          className="waves-effect waves-light btn red accent-2"
          onClick={() => { this.props.handleRemove(this.props.index) }}
        >Remove</a>
        <a
          className="waves-effect waves-light btn red accent-2"
          onClick={this.props.handleToggle}
        >
        TOGGLE
        </a>
      </div>
    )
  }
}

export default Controller;
