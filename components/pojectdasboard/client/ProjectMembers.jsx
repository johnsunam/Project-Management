import React from 'react';

ProjectMembers= class ProjectMembers extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    var users=this.props.members._projectmembers;
    var lists=users.map(function(member){
      return(<li className="collection-item avatar">
        <a><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
         <h6>{member.firstname}&nbsp;{member.lastname}</h6>
        </a>
        <a className="btn pull-right" id={member} onClick={self.addMember.bind(self)}><i className="fa fa-minus"id="{member._id}"> </i></a>
        </li>
      )
    });
    return(<div className="well">
<ul className="collection">
{lists}
</ul>
      </div>)
  }

}

export default ProjectMembers;
