import React from 'react';

Discussion = class Discussion extends React.Component {
  constructor(props) {
    super(props);
  }
  addChat(e){

    if(e.key == 'Enter')
    {
      Meteor.call('addChat',e.target.value,this.props.project[0]._id);

    }
  }
  render(){
console.log(this.props.data);
 var chatlists=this.props.data.map(function(chat){
   return(<li>{chat.username}:&nbsp;&nbsp;{chat.content}</li>)
 });
    return(<div className="well discussion">
      <div className="fixedContainer">
       <h5>Discussion forum</h5>
               <div className="chats">
               <ul className="collection">
               {chatlists}
               </ul>
         </div>
         <div>
         <div class="row">
         <div class="row">
           <div class="input-field col s12">
             <input id="chat" onKeyDown={this.addChat.bind(this)}/>
             <label for="textarea1">Textarea</label>
           </div>
         </div>
  </div>
         </div>
      </div>

    </div>)
  }
}


export default Discussion;
