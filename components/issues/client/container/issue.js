import { composeWithTracker } from 'react-komposer';
import issues from '../../both/collection';
import Issue from './../issue';
import projects from '../../../projects/both/collections';

function composer(props,onData){
  const subcription=Meteor.subscribe('getIssues');
  console.log(props);
if(subcription.ready()){
const issue=issues.find({_id:props.issueId}).fetch();
const subs=Meteor.subscribe('getProjects');
if(subs.ready()){
  const pro=projects.find({_id:issue[0].projectId}).fetch();
  var detail={issue:issue,project:pro};
  
  onData(null,{detail});
}

  }

};
export default composeWithTracker(composer)(Issue);
