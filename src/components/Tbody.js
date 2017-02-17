import React, { Component } from 'react';
import { ContactList } from './index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Tbody extends Component {
  render(){
    const mapTo = (data) => {
      data = data.filter(
        (data) => {
          return data.name.indexOf(this.props.keyword) > -1
        }
      )
      return data.map((contact, i) => {

        return (
            <ContactList
              key={i}
              id={"list"+i}
              option={i}
              contact={contact}
              onClick={() => { this.props.handleIndex(i) }}
              index={this.props.index}
              handleVisible={this.props.handleVisible}
            />
        )
      })
    }
    return (
          <tbody>
              <ReactCSSTransitionGroup transitionName="memo"
                                transitionEnterTimeout={2000}>
                                {mapTo(this.props.contact)}
              </ReactCSSTransitionGroup>
          </tbody>
    )
  }
}

export default Tbody;
