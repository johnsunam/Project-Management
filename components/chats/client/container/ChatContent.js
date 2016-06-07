import { composeWithTracker } from 'react-komposer';
import chats from '../../both/collection.js';
import ChatContent from './../ChatContent.jsx';

function composer(props,onData){
const subcription=Meteor.subscribe('getChats');
//var conversations=new Array();
if(subcription.ready()){
  var messages=chats.find({$and:[
    {$or:[{from:props.partnerId},{from:Meteor.userId()}]},
    {$or:[{to:props.partnerId},{to:Meteor.userId()}]}
  ]}).fetch();
  console.log(messages);
  var conversations=messages;
onData(null,{conversations});
}
};
export default composeWithTracker(composer)(ChatContent);
