import React from 'react';
import Sidebar from '../../sidebar/client/sidebar.jsx';
class Content extends React.Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(<div className="row">
      <div className="col s9">
      {this.props.content}
</div>
    </div>)
  }
}
 export default Content;
