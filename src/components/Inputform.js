import React, { Component } from 'react';
import { Add } from './index';


class Inputform extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      phone:'',
      memo:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleCreate(){
    const Materialize = window.Materialize;
    let { name, phone, memo } = this.state;

    if(!name || !phone || !memo){
      Materialize.toast('이름과 전화번호, 메모는 필수입력입니다.', 2000);
      return;
    } else {
      let contact = {};
      contact.name = name;
      contact.phone = phone;
      contact.memo = memo;
      contact.visible = true;
      this.props.handleCreate(contact);

      this.setState({
        name:'',
        phone:'',
        memo:''
      })
    }
  }
  handleRemove(index){
    this.props.handleRemove(index);
  }

  render(){
    return (
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input
              name="name"
              id="name"
              type="text"
              className="validate"
              onChange={this.handleChange}
              value={this.state.name}

            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              name="phone"
              id="phone"
              type="text"
              className="validate"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              name="memo"
              id="textarea"
              className="materialize-textarea"
              name="memo"
              onChange={this.handleChange}
              value={this.state.memo}
            >
            </textarea>
            <label htmlFor="textarea">MEMO</label>
          </div>
        </div>

        <Add
          handleCreate={this.handleCreate}
        />
      </div>
    )
  }
}

export default Inputform;
