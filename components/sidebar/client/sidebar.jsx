import React from 'react';

Sidebar= class Sidebar extends React.Component {

  render(){
    var divstyle={
      height:400
    };
    var item={
      height:100
    }
    return(
      <div className="col s3 pull-left" >
      <div className="collection" style={divstyle}>
    <a href="/home" className="collection-item" style={item}>Members</a>
    <a href="/projects" className="collection-item" style={item}>Projects</a>
    <a href="/chats" className="collection-item" style={item}>Chats</a>
    <a href="#!" className="collection-item" style={item}>Alan</a>
  </div>

    </div>)
  }
}

export default Sidebar;
