import { composeWithTracker } from 'react-komposer';
import member from '../../both/collections';
import Members from '.././member.jsx';

function composer(props,onData){
    const subcription= Meteor.subscribe('getMembers');
  if(subcription.ready()){
    const memberList= member.find().fetch();
    onData(null,{memberList});
  }
};
export default composeWithTracker(composer)(Members);