import React, { Component } from 'react';


class Home extends Component {
  render(){
    return (
      <div className="container home">
        <div className="col s4 center">
          <i className="material-icons">thumb_up</i>
          <p className="promo-caption">연습</p>
          <p className="center">
            최고의 프론트 앤드 개발자
          </p>
        </div>
        <div className="col s4 center">
          <i className="material-icons">hearing</i>
          <p className="promo-caption">경청</p>
          <p>
            사람들과 함께 소통하는 개발자
          </p>
        </div>
        <div className="col s4 center">
          <i className="material-icons">mode_edit</i>
          <p className="promo-caption">디버깅</p>
        </div>
        <p className="center">
          꼼꼼한 개발자
        </p>
      </div>
    )
  }
}

export default Home;
