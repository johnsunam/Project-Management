import React from 'react';
import Elements from './container/elements.js';

Projectdashboard= class Projectdashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

    
    $('ul.tabs').tabs();
  }
  render(){

    return(<section className="hbox">
      <Elements id={this.props.id}/>
      </section>)
  }
}

export default Projectdashboard;
