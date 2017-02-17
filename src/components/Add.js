import React, { Component } from 'react';

class Controller extends Component {
  render(){
    return (
      <div className="row right-align" >
        <a
          className="waves-effect waves-light btn red accent-2"
          onClick={this.props.handleCreate}
        >ADD</a>
      </div>
    )
  }
}

export default Controller;
