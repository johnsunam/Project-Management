import { composeWithTracker } from 'react-komposer';
import issues from '../../both/collection';
import Issue from './../issue';

function composer(props,onData){
  const subcription=Meteor.subscribe('getIssues');
  console.log(props.issueId);
if(subcription.ready()){
const issue=issues.find({_id:props.issueId}).fetch();
console.log(issue);
  onData(null,{issue});
  }

};
export default composeWithTracker(composer)(Issue);
