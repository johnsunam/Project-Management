import React from 'react';

Aside=class Aside extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(<aside className="bg-success dker aside-sm nav-vertical" id="nav"> <section className="vbox">
      <header className="bg-black nav-bar"> <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen" data-target="#nav">
         <i className="fa fa-bars"></i> </a> <a href="dashboard.html#" className="nav-brand" data-toggle="fullscreen">wscrm</a>
          <a className="btn btn-link visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
             <i className="fa fa-comment-o"></i> </a>
             </header>
             <section>
               <nav className="nav-primary hidden-xs">
                 <ul className="nav">
                  <li> <a href="/home">
                   <i className="fa fa-home"></i> <span>Home</span>
                 </a>
                 </li>
                <li> <a href="/chats">
                 <i className="fa fa-comments"></i> <span>Chat</span>
               </a>
               </li>
                </ul>
                    </nav>
                    </section>
                     <footer className="footer bg-gradient hidden-xs"> <a href="modal.lockme.html" data-toggle="ajaxModal" className="btn btn-sm btn-link m-r-n-xs pull-right"> <i className="fa fa-power-off"></i> </a> <a href="dashboard.html#nav" data-toggle="className:nav-vertical" className="btn btn-sm btn-link m-l-n-sm"> <i className="fa fa-bars"></i>
                     </a>
                   </footer>
                  </section>
                   </aside>
    )
  }
}
