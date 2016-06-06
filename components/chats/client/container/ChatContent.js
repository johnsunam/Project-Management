import { composeWithTracker } from 'react-komposer';
import chats from '../../both/collection.js';
import ChatContent from './../ChatContent.jsx';

function composer(props,onData){

const subcription=Meteor.subscribe('getChats');
console.log(subcription);
var conversations=new Array();
if(subcription.ready()){
  var messages=chats.find({roles:{$all:[Meteor.userId()]}}).fetch();
  console.log(messages);
  _.each(messages,function(mes){
    var content=_.contains(mes.roles,props.partnerId);
     if(content){
conversations.push(mes);
     }

  });
  console.log(conversations);
onData(null,{conversations});
}
};
export default composeWithTracker(composer)(ChatContent);
