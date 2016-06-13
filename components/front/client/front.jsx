import React from 'react';

Front= class Front extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    var hgt={height:250}
    return(
    <section className="hbox">
    <section className="panel" style={hgt}>
      <header className="panel-heading text-right bg-light">
        <ul className="nav nav-tabs pull-left">
        <li>
        <a href="components.html#messages-2" data-toggle="tab">
          <i className="fa fa-users text-default"></i>
          Members
          </a>
          </li>
          <li className="active"><a href="components.html#profile-2" data-toggle="tab">
            <i className="fa fa-bell text-default"></i> Issue Notification</a>
            </li>
            </ul> <span className="hidden-sm">Left tab</span> </header>
                <div className="panel-body">
                <div className="tab-content">
                  <div className="tab-pane fade" id="messages-2"><Main/></div>
                   <div className="tab-pane fade active in" id="profile-2"><IssueNotification/>
                   </div>

                    </div>
                    </div>
                    </section>

    <ProjectSide/>
    </section>
  )
  }
}
export default Front;
