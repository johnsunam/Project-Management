import { composeWithTracker } from 'react-komposer';
import chats from '../../both/collection.js';
import Chats from './../chats.jsx';

function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){

  if(props.project[0]){
  var member=Meteor.users.find({_id:{$in:props.project[0].projectmember}}).fetch();
  }
  else {
    var member=Meteor.users.find({}).fetch();
  }
var members=  new Array();
    _.each(member,function(mem){
      if(mem._id != Meteor.userId()){
        members.push(mem);
      }
    });
onData(null,{members});
}
};
export default composeWithTracker(composer)(Chats);
