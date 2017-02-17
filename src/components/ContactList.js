import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props){
    super(props);
    this.handleText = this.handleText.bind(this);
  }
  handleText(){
    this.props.handleVisible(this.props.option);
  }
  render(){

    const { name, phone, visible } = this.props.contact;
    let style;
    if(visible){
      style = {
        textDecoration: ""
      }
    } else {
      style = {
        textDecoration:"line-through"
      }
    }
    return (
      <tr style={style}>
        <td>
          <input
            name="group"
            type="radio"
            className="filled-in checkbox-pink"
            id={this.props.id}
          />
          <label
            onClick={this.props.onClick}
            htmlFor={this.props.id}
          ></label>
        </td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>
          <a
            className="waves-effect waves-light btn blue accent-2"
            onClick={this.handleText}
          >{visible ? 'DEFER' : 'RETURN'}</a>
        </td>
      </tr>
    )
  }
}

export default ContactList;
