import React, { Component } from 'react';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      phone:'',
      memo:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  componentWillReceiveProps (nextProps){
    nextProps = JSON.stringify(nextProps)
    let propsValue = JSON.parse(nextProps);

    const { name, phone, memo } = this.props.contact;
    if(!this.props.isEdit){
      this.setState({
        name: name,
        phone: phone,
        memo: memo
      })
    } else {
      if(propsValue.isEdit){
        this.props.handleToggle();
      }
    }
  }
  handleUpdate(){
    const { name, phone, memo } = this.state;
    this.props.handleUpdate(name,phone,memo);
    this.props.handleToggle();
  }
  render(){
    const { name, phone, memo } = this.props.contact;
    const edit = (
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input
              name="name"
              id="name"
              type="text"
              className="validate"
              value={this.state.name}
              onChange={this.handleChange}
            />

          </div>
          <div className="input-field col s6">
            <input
              name="phone"
              id="phone"
              type="text"
              className="validate"
              value={this.state.phone}
              onChange={this.handleChange}
            />

          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              name="memo"
              id="textarea"
              className="materialize-textarea"
              name="memo"
              value={this.state.memo}
              onChange={this.handleChange}
            >
            </textarea>

          </div>
        </div>
        <a
          className="waves-effect waves-light btn red accent-2"
          onClick={this.handleUpdate}
        >UPDATE
        </a>
      </div>
    )
    const detail = (
      <div>
        <div>
          <span className="card-title activator grey-text text-darken-4">{name}</span>
          <p>{phone}</p>
          <p>
            {memo}
          </p>
        </div>
      </div>
    )
    return (
      <div>
        {this.props.isEdit ? edit : detail}
      </div>
    )
  }
}

Detail.defaultProps = {
  contact: {
    name: '',
    phone: '',
    memo: ''
  }
}
export default Detail;
