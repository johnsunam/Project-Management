import React from 'react';
import Elements from './container/elements.js';

Projectdashboard= class Projectdashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

    $('.modal-trigger').leanModal();
    $('ul.tabs').tabs();
  }
  render(){
    return(<div className="">
      <Elements id={this.props.id}/>
      </div>)
  }
}

export default Projectdashboard;
