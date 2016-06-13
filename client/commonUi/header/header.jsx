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
    var name= this.props.user[0].firstname+" "+this.props.user[0].lastname;
    return(<header className="header bg-black navbar navbar-inverse">
       <div className="collapse navbar-collapse pull-in">

                   <ul className="nav navbar-nav navbar-right">
                                  <li className="dropdown">
                                    <a href="dashboard.html#" className="dropdown-toggle" data-toggle="dropdown">
                                       <span className="thumb-sm avatar pull-left m-t-n-xs m-r-xs">
                                          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw"/>
                                         </span> {name} <b classNameName="caret"></b>
                                       </a>
                                       <ul className="dropdown-menu animated fadeInLeft">
                                          <li> <a href="dashboard.html#">Settings</a> </li>
                                          <li> <a href="profile.html">Profile</a> </li>
                                           <li> <a href="dashboard.html#">
                                             <span className="badge bg-danger pull-right">3</span> Notifications </a> </li>
                                              <li> <a href="docs.html">Help</a> </li>
                                               <li onClick={this.logout}> <a href="signin.html">Logout</a>
                                                </li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                      </header>
   )
  }
  _dropdown(){

    $("#dropdown").dropdown();
  }
}
 export default Header;
