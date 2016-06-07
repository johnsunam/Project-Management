import React from 'react'

ChatHeader=class ChatHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    $(".dropdown-button").dropdown();

  }
   deleteChats(e){
     e.preventDefault();
     Meteor.call('removeChat',this.props.partners);
   }
  render(){
    var name=this.props.partner[0].firstname+" "+this.props.partner[0].lastname;
    return(<div>
            <ul id="dropdown2" className="dropdown-content">
        <li onClick={this.deleteChats.bind(this)}><a href="#!">Delete chat</a></li>
      </ul>
      <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo center">Chats-&nbsp;&nbsp;{name}</a>

           <ul className="right hide-on-med-and-down delete">
          <li><a className="dropdown-button" href="#!" data-activates="dropdown2"><i className="fa fa-cog" aria-hidden="true"></i></a></li>
               </ul>
         </div>
       </nav>
    </div>)
  }
}
export default ChatHeader;
