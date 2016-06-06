import { composeWithTracker } from 'react-komposer';
import chats from '../../both/collection.js';
import Chats from './../chats.jsx';

function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){
  var member=Meteor.users.find().fetch();
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
