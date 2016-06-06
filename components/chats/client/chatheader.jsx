import React from 'react'

ChatHeader=class ChatHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(<div>
      <nav>
         <div className="nav-wrapper">
           <a href="#" className="brand-logo center">Chats</a>
           <ul id="nav-mobile" className="left hide-on-med-and-down">
             <li><a href="sass.html">Sass</a></li>
             <li><a href="badges.html">Components</a></li>
             <li><a href="collapsible.html">JavaScript</a></li>
           </ul>
         </div>
       </nav>
    </div>)
  }
}
export default ChatHeader;
