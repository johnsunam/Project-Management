import { composeWithTracker } from 'react-komposer';
import chats from '../../both/collection.js';
import ChatHeader from './../chatheader.jsx';

function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){
  if(props.partners !=" ")
  {
    var partner=Meteor.users.find({_id:props.partners}).fetch();

}
else {
  partner=[{firstname:"no",lastname:"one"}];

}

onData(null,{partner});
}
};
export default composeWithTracker(composer)(ChatHeader);
