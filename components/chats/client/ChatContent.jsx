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
      return(<li>
        {mg.name}:&nbsp;&nbsp;{mg.content}
        </li>)
    });
    return(<div>
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
      </div>)
  }
}

export default ChatContent;
