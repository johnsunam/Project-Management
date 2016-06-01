import MembersDropdown from '../../client/MembersDropdown';
import { composeWithTracker } from 'react-komposer';
import member from '../../../home/both/collections';

function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){
 const data=Meteor.users.find().fetch();
var nonmembers=new Array();
var projectmembers=props.issuesDetail.projectmember;
var assign;
console.log(props.issuesDetail);
_.each(projectmembers,function(mem){
  console.log(mem);
  if(mem != props.issuesDetail.issue.assigned)
  {
    var choosen=_.findWhere(data,{_id:mem});
    nonmembers.push(choosen)
  }
  else {
    assign=_.findWhere(data,{_id:mem});
    console.log(assign);
  }
});
if(!assign){
  assign={firstname:"noone"};
}
var issuesDetail={nonmembers:nonmembers,issue:props.issuesDetail.issue,member:assign}
console.log(issuesDetail);
onData(null,{issuesDetail});
  }
}

export default composeWithTracker(composer)(MembersDropdown);
