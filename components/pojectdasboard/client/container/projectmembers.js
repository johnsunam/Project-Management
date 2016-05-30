import ProjectMembers from './../ProjectMembers';
import { composeWithTracker } from 'react-komposer';

function composer(props,onData){
    const subcription=Meteor.subscribe('getMembers');
  var projectmember=props.members[0].projectmember;
  var projectmembers=new Array();
if(subcription.ready()){
 const data=member.find().fetch();
 _.each(projectmember,function(member){
 var single=_.findWhere(data,{_id:member});
 projectmembers.push(single);
 });
console.log(projectmembers);
    onData(null,{projectmembers});
    }

  }

export default composeWithTracker(composer)(ProjectMembers);
