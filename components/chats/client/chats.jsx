
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
    if(self.props.types=="private"){
      var href='#private'+member._id;
    }else {
      var href='#'+member._id;
    }
  var com={sel:self,id:member._id};

  return( //<li onClick={self.handleClick.bind(com)}><a  href={href} data-toggle="tab">{member.firstname}&nbsp;&nbsp;{member.lastname}</a></li>
  <a className="list-group-item" href={href}  onClick={self.handleClick.bind(com)} data-toggle="tab">
  <i className="fa fa-circle text-success text-xs">
  </i>
  <span>{member.firstname}&nbsp;&nbsp;{member.lastname}</span>
  </a>
)
});
var contentlist=this.props.members.map(function(member){
  if(self.props.types=="private"){
  var ids="private"+member._id;
}
else {
  var ids=member._id;
}
  return(<div className="tab-pane" id={ids}><ChatContent partnerId={member._id}/></div>)
});
var hgt={height:450};
    return(/*<div className="">
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

</div>*/
<div className="hbox stretch" style={hgt}>
<aside className="bg-light lter" style={hgt}>
<section className="panel">
<header className="panel-heading">Chat</header>
<div className="tab-content outer">
  {contentlist}
</div>
 </section>
</aside>
<aside className="aside-sm">
<section className="vbox">
<header className="bg-light dk header">
<p>Contacts (25)</p>
</header>
<section className="scrollable bg-white b-l w-f">
<div className="list-group list-group-alt no-radius no-borders nav nav-tabs">
{chatlists}
 </div>
 </section>
 <footer className="footer text-center b-t b-l"> <button className="btn btn-success btn-sm"><i className="fa fa-plus"></i> New contact</button> </footer> </section> </aside>
</div>


  )
  }
}


export default Chats;
