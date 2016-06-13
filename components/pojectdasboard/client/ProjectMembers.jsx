import React from 'react';
ProjectMembers= class ProjectMembers extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    if(!Roles.userIsInRole(Meteor.userId(),'owner')){
       $(".btn").hide();
    }
  }
  deleteMembers(e){
    e.preventDefault();
formermember=this.props.members[0].projectmember;
latestmember=_.without(formermember,e.target.id);
var obj=this.props.members[0]._id;
console.log(this.props.fullDetail.issue);
  var associated= _.findWhere(this.props.fullDetail.issue,{assigned:e.target.id});
  console.log(associated);
  if(associated){
   alert('cannot delete user is assigned a issue');
 }
 else
   {
      Meteor.call('deleteMember',obj,latestmember);

   }
 }

  render(){
    var users=this.props.fullDetail.projectmembers;
    console.log(users);
    self=this;
    var lists=users.map(function(member){
      return(/*<li className="collection-item avatar">
        <a><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
         <h6>{member.firstname}&nbsp;{member.lastname}</h6>
        </a>
        <a className="btn pull-right" id={member._id} onClick={self.deleteMembers.bind(self)}><i className="fa fa-minus" id={member._id}> </i></a>
        </li>
*/<li className="list-group-item">
       <div className="media">
          <span className="pull-left thumb-sm">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="John said" className="img-circle"/>
          </span>
          <a className="btn pull-right" id={member._id} onClick={self.deleteMembers.bind(self)}><i className="fa fa-minus" id={member._id}></i></a>
         </div>
         <div className="media-body">
           <div>
             {member.firstname}&nbsp;{member.lastname}
             <label className="label bg-dark m-l-xs">{member.roles}
             </label>
           </div>
            <small className="text-muted">about 2 minutes ago</small>
           </div>
         </li>

      )
    });
    return(<div>
      <ul className="list-group alt">
     {lists}
      </ul>
      </div>)
  }

}

export default ProjectMembers;
