import { composeWithTracker } from 'react-komposer';
import issues from '../../both/collection';
import Issues from './../issues';

function composer(props,onData){
  const subcription=Meteor.subscribe('getIssues');
  console.log(props);
if(subcription.ready()){
const issuesList=issues.find({projectId:props.project[0]._id}).fetch();
console.log(issuesList);
  onData(null,{issuesList});
  }

};
export default composeWithTracker(composer)(Issues);
