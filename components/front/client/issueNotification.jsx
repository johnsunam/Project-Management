import React from 'react';

IssueNotification= class IssueNotification extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    var hgt={height:500};
    return(<aside className="bg-white-only" style={hgt}>
    <section className="panel">
       <header className="panel-heading">
          <ul className="nav nav-pills pull-right">
            <li>
               <a href="widgets.html#" className="panel-toggle text-muted">
              <i className="fa fa-caret-down text-active"></i>
              <i className="fa fa-caret-up text"></i>
            </a>
          </li>
        </ul> Issue Notifications
        <span className="badge bg-info">32</span>
       </header>
       <section className="panel-body">
          <article className="media">
             <div className="pull-left">
               <span className="fa fa-stack fa-2x">
                  <i className="fa fa-circle text-info fa-stack-2x">
                  </i>
                  <i className="fa fa-bold text-white fa-stack-1x">
                  </i>
                </span>
               </div>
                <div className="media-body">
                  <a href="widgets.html#" className="h4">Bootstrap 3: What you need to know
                  </a>
                  <small className="block m-t-xs">
                    Sleek, intuitive, and powerful mobile-first
                    front-end framework for faster and easier web development.
                  </small>
                  <em className="text-xs">Posted on
                     <span className="text-danger">Feb 23, 2013
                     </span>
                   </em>
                 </div>
                </article>
                </section>
                 <div className="line pull-in"></div>
                 </section>
              </aside>
             )
  }
}

export default IssueNotification;
