
import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ChatContent from './container/ChatContent.js';

Chats= class Chats extends React.Component {
  constructor(props) {
    super(props);
  }
handleChat(e){
  e.preventDefault();
  console.log(this);
  var partner='/single/'+this._id;
  FlowRouter.go(partner);
}

  render(){
    var self=this;
var chatlists=this.props.members.map(function(member){
  var href='#'+member._id;
  return( <li ><a href={href} data-toggle="tab">{member.firstname}&nbsp;&nbsp;{member.lastname}</a></li>)
});
var contentlist=this.props.members.map(function(member){
  return(<div className="tab-pane" id={member._id}><ChatContent partnerId={member._id}/></div>)
});

    console.log(this.props.members);
    return(<div className="col s8  pull-left">
    <ChatHeader/>
<div className="col-xs-3 chatlists well">
        <h5>chat list</h5>
<div className="">
         <ul className="nav nav-tabs tabs-left">
           {chatlists}
         </ul>
</div>
       </div>
<div className="col-xs-9 ">
<div className="tab-content outer">
  {contentlist}
</div>


</div>                  <div className="clearfix"></div>

              </div>



          )
  }
}


export default Chats;
