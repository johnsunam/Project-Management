import React from 'react';
import NonMembers from './container/nonmembers';
import ProjectMembers from './container/projectmembers';
import Issues from '../../issues/client/container/issues';
Elements= class Elements extends React.Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){

}
  render(){
      return(<div>
      <NonMembers members={this.props.data}/>
      <ProjectMembers members={this.props.data}/>
      <Issues project={this.props.data}/>
      </div>)
  }
}

export default Elements;
