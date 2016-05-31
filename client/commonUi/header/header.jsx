import React from 'react';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
Header= class Header extends React.Component{
componentDidMount(){
  this._dropdown();
}
 logout(e){
   e.preventDefault();
   Meteor.logout();
   FlowRouter.go('/');

 }
  render(){
    return(<div className='navbar'>
    <ul id="dropdown1" className="dropdown-content">
  <li><a href="#!" onClick={this.logout}>SignOut</a></li>
  <li className="divider"></li>
</ul>
<nav>
  <div className="nav-wrapper">
    <a href="#!" className="brand-logo">WSCRM</a>
    <ul className="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>

      <li><a className="dropdown-button" id="dropdown" href="#!" data-activates="dropdown1" onClick={this._dropdown}>Setting<i className="material-icons right"></i></a></li>
    </ul>
  </div>
</nav>
    </div>)
  }
  _dropdown(){

    $("#dropdown").dropdown();
  }
}
 export default Header;
