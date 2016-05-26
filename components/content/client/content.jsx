import React from 'react';

class Content extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(<div className="row">
      <Sidebar/>
      {this.props.content}
    </div>)
  }
}
 export default Content;
