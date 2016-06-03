import { composeWithTracker } from 'react-komposer';
import member from '../../both/collections';
import Members from '.././member.jsx';

function composer(props,onData){
    const subcription= Meteor.subscribe('getMembers');
  if(subcription.ready()){
    const members= Meteor.users.find().fetch();
if(Roles.userIsInRole(Meteor.userId(),'owner'))
{
  var memberList=_.where(members,{creator:Meteor.userId()});
}
else{
  var memberList=_where(members,{creator:Meteor.user().creator});
}

    console.log(memberList);
    onData(null,{memberList});
  }
};
export default composeWithTracker(composer)(Members);
