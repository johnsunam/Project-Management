import ProjectMembers from './../ProjectMembers';
import { composeWithTracker } from 'react-komposer';
import issues from '../../../issues/both/collection';
function composer(props,onData){
console.log(props);
    const subcription=Meteor.subscribe('getMembers');
  var projectmember=props.members[0].projectmember;
  var projectmembers=new Array();
if(subcription.ready()){
  const subcrip=Meteor.subscribe('getIssues');
  if(subcrip.ready())
  {
    var issue=issues.find({projectId:props.members[0]._id}).fetch();

 const data=Meteor.users.find().fetch();
 _.each(projectmember,function(member){
 var single=_.findWhere(data,{_id:member});
 projectmembers.push(single);
 });
    var fullDetail={issue:issue,projectmembers:projectmembers};
    onData(null,{fullDetail});
}
    }

  }

export default composeWithTracker(composer)(ProjectMembers);
