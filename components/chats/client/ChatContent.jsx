import React from 'react';

ChatContent= class ChatContent extends React.Component {
  constructor(props) {
    super(props);
  }
  addChat(e){

    if(e.key == 'Enter')
    {
      console.log(this.props.partnerId);
  Meteor.call('addConversation',this.props.partnerId);

    }
  }
  render()
  {
    var mesg=this.props.conversations.map(function(mg){
      console.log(mg);
      return(<li>
        {mg._id}
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
          <input id="chat" onKeyDown={this.addChat.bind(this)}/>
        </div>
      </div>
      </div>)
  }
}

export default ChatContent;
