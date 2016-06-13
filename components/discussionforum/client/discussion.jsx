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
   return(/*<li className="collection-item">{chat.username}:&nbsp;&nbsp;{chat.content}</li>*/
 <li className="list-group-item">
 <div className="media">
 <span className="pull-left thumb-sm">
 <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="John said" className="img-circle"/>
 </span>
 <div className="pull-right text-success m-t-sm">
 <i className="fa fa-circle"></i>
 </div> <div className="media-body">
 <div>{chat.username}:&nbsp;&nbsp;{chat.content}
 </div>
 <small className="text-muted">about 2 minutes ago</small>
 </div>
 </div>
 </li>)
 });
 var hgt={height:450};
    return(/*<div className="well discussion">
      <div className="fixedContainer">
       <h5>Discussion forum</h5>
               <div className="chats">
               <ul className="collection">
               {chatlists}
               </ul>
         </div>
         <div>

         <div className="row">
           <div className="input-field col s12">
             <input id="chat" onKeyDown={this.addChat.bind(this)}/>

           </div>
         </div>

         </div>
      </div>

    </div>*/
    <div className="discussion">
    <section className="panel portlet-item fixedContainer">
    <header className="panel-heading"> Discussion Forum </header>
<div className="chats">
    <ul className="list-group alt">
    {chatlists}
    </ul>
      </div>
<div className="input-group col-md-12">
<input type="text" id="chat" onKeyDown={this.addChat.bind(this)} className="form-control col-md-8" placeholder="Say something"/>
 </div>
    </section>
</div>
)
  }
}


export default Discussion;
