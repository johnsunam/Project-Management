import React from 'react';

MembersDropdown= class MembersDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    /*$('#member').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrain_width: false,
     hover: true,
          gutter: 0,
     belowOrigin: false,
     alignment: 'left'
   }
 );*/
  }
  addAssigned(e)
  {
    e.preventDefault();
console.log(this);
Meteor.call('addAssigned',e.target.className,e.target.id,this.props.issuesDetail.issue.assigned);
  }
  render(){
var self=this;
var issue=this.props.issuesDetail.issue._id;
    var memberlist=this.props.issuesDetail.nonmembers.map(function(mem){
   return(<li id={mem._id} className={issue} onClick={self.addAssigned.bind(self)}>{mem.firstname}</li>)
   });
    return(<div>
      <ul id={issue} className='dropdown-content member'>
{memberlist}
</ul>
<div>
<h5>Assigned to-{this.props.issuesDetail.member.firstname}</h5>
</div>
</div>)
  }
}
 export default MembersDropdown;
