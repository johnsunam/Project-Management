
import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import ChatContent from './container/ChatContent.js';
import ChatHeader from './container/ChatHeader';
Chats= class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state={partner:" "};
  }
handleClick(e){
  e.preventDefault();
console.log(this.sel.state);
console.log(this.id);
this.sel.setState({partner:this.id});
console.log(this.sel.state.partner);
}


  render(){
    var self=this;
var chatlists=this.props.members.map(function(member){
  var href='#'+member._id;
  var com={sel:self,id:member._id};
  return( <li onClick={self.handleClick.bind(com)}><a  href={href} data-toggle="tab">{member.firstname}&nbsp;&nbsp;{member.lastname}</a></li>)
});
var contentlist=this.props.members.map(function(member){
  return(<div className="tab-pane" id={member._id}><ChatContent partnerId={member._id}/></div>)
});

    return(<div className="">
    <div>
    <ChatHeader partners={self.state.partner}/>
</div>
<div className="col s3 chatlists well">
        <h5>chat list</h5>
<div className="">
         <ul className="nav nav-tabs tabs-left">
           {chatlists}
         </ul>
</div>
       </div>
<div className="col s9">
<div className="tab-content outer">
  {contentlist}
</div>
</div>  <div className="clearfix"></div>

</div>



          )
  }
}


export default Chats;
