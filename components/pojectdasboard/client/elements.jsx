import React from 'react';
import NonMembers from './container/nonmembers';
import ProjectMembers from './container/projectmembers';
Elements= class Elements extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props.data);
    return(<div>
      <NonMembers members={this.props.data}/>
      <ProjectMembers members={this.props.data}/>
      </div>)
  }
}

export default Elements;
