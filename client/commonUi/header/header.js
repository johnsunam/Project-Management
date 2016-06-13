import { composeWithTracker } from 'react-komposer';
import Header from './../header/header.jsx'
function composer(props,onData){
  const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){
  const user=Meteor.users.find({_id:Meteor.userId()}).fetch();
  console.log(user);
  onData(null,{user});
  }

};
export default composeWithTracker(composer)(Header);
