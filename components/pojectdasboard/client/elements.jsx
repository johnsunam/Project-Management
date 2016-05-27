import React from 'react';

Elements= class Elements extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){

  }
  render(){
console.log(this.props.obj);
    return(<div>
      <NonMembers members={this.props.obj}/>
      <ProjectMembers members={this.props.obj}/>
      </div>)
  }
}

export default Elements;
