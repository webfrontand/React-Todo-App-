import React, { Component } from 'react';
import { Controller, Thead, Tbody, Inputform, Table, Detail, Search } from '../components';
import update from 'react-addons-update';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: "류한경",
          phone: "010-0000-0000",
          memo: "안녕하세요! 류한경입니다. 저는 노력하는 프론트 앤드 개발자가 되는것이 목표입니다.",
          visible: true
        },
        {
          name: "류한아",
          phone: "010-0000-0001",
          memo: "안녕하세요! 류한아입니다. 저는 능력있는 웹 개발자가 되는것이 목표입니다.",
          visible: true
        },
        {
          name: "류한이",
          phone: "010-0000-0002",
          memo: "안녕하세요! 류한이입니다. 현재는 Reactjs를 공부중에 있고, 시간날때마다 Vuejs도 보고 있습니다!",
          visible: true
        }
      ],
      index: -1,
      isEdit: false,
      keyword: ''
    }
    this.handleIndex = this.handleIndex.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleVisible = this.handleVisible.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillMount(){
    const data = localStorage.data;

    if(data){
      this.setState({
        data: JSON.parse(data)
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevProps.data) != JSON.stringify(this.state.data)){
      localStorage.data = JSON.stringify(this.state.data);
    }
  }
  handleVisible(index){
    this.setState({
      data: update(this.state.data, {
        [index]: {
          visible: { $set: !this.state.data[index].visible }
        }
      })
    })
  }
  handleIndex(index){
    this.setState({
      index
    });
    console.log(index);
  }
  handleCreate(contact){
    const Materialize = window.Materialize;
    this.setState({
      data: update(this.state.data, {
        $push: [contact]
      })
    });
    Materialize.toast(contact.name+'님! 정상 추가 :D', 2000);
  }
  handleRemove(index){
    const Materialize = window.Materialize;
    if(this.state.index <= -1){
      Materialize.toast('요소를 선택하세요', 2000);
      return;
    }
    this.setState({
      data: update(this.state.data, {
        $splice: [[this.state.index, 1]]
      })
    });
    Materialize.toast('정상 삭제 :D', 2000);
  }
  handleToggle(){
    const Materialize = window.Materialize;
    if(this.state.index <= -1){
      Materialize.toast('요소를 선택하세요', 2000);
      return;
    }
    this.setState({
      isEdit: !this.state.isEdit
    });
    console.log(this.state.isEdit)
  }
  handleUpdate(name, phone, memo){
    const Materialize = window.Materialize;
    this.setState({
      data: update(this.state.data, {
        [this.state.index]: {
          name: { $set: name },
          phone: { $set: phone },
          memo: { $set: memo }
        }
      })
    });
    Materialize.toast('업데이트!', 2000);
  }

  handleKeyword(key){
    this.setState({
      keyword: key
    });
    console.log(key);
  }
  render(){
    return (
      <div>
        <Inputform
          handleCreate={this.handleCreate}
          handleRemove={this.handleRemove}
        />
        <Search
          handleKeyword={this.handleKeyword}
        />
        <Table>
          <Thead />
          <Tbody
            contact={this.state.data}
            handleIndex={this.handleIndex}
            keyword={this.state.keyword}
            handleVisible={this.handleVisible}
          />
        </Table>
        <Controller
          index={this.state.index}
          handleRemove={this.handleRemove}
          handleToggle={this.handleToggle}
        />
        <Detail
          contact={this.state.data[this.state.index]}
          isEdit={this.state.isEdit}
          handleUpdate={this.handleUpdate}
          handleToggle={this.handleToggle}
        />
      </div>
    )
  }
}

export default List;
