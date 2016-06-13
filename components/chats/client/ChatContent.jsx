import React from 'react';

ChatContent= class ChatContent extends React.Component {
  constructor(props) {
    super(props);
  }
  addChat(e){

    if(e.key == 'Enter')
    {
      //alert(e.target.value)

  Meteor.call('addConversation',e.target.value,this.props.partnerId);

    }
  }
  render()
  {
    console.log(this.props.conversations);
    var mesg=this.props.conversations.map(function(mg){
      console.log(mg);
      return(/*<li>
        {mg.name}:&nbsp;&nbsp;{mg.content}
        </li>*/
        <article id="chat-id-1" className="chat-item left">
        <a href="widgets.html#" className="pull-left thumb-sm avatar">
        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" className="img-circle"/></a>
        <section className="chat-body">
        <div className="panel text-sm m-b-none">
        <div className="panel-body">
        <span className="arrow left">
        </span>{mg.content}</div> </div>
         <small className="text-muted"><i className="fa fa-check text-success"></i> 2 minutes ago</small>
         </section>
         </article>
      )
    });
    var hgt={height:450};
    return(/*<div>
<div className="chatContent well">
<ul>
{mesg}
</ul>
</div>
            <div className="row">
        <div className="input-field col s12">
          <input  id={this.props.partnerId}  onKeyDown={this.addChat.bind(this)}/>
        </div>
      </div>
      </div>*/
      <section className="chat-list panel-body" >
      <div style={hgt}>
{mesg}
       </div>

          <article className="chat-item" id="chat-form">
         <a className="pull-left thumb-sm avatar">
         <img src="images/avatar.jpg" className="img-circle"/></a>
         <section className="chat-body">

         <div className="input-group">
         <input type="text"id={this.props.partnerId} onKeyDown={this.addChat.bind(this)} className="form-control" placeholder="Say something"/>
         <span className="input-group-btn">
         <button className="btn btn-success" type="button">SEND</button>
         </span> </div> </section> </article> </section>)
  }
}

export default ChatContent;
