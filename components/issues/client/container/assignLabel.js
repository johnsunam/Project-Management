import { composeWithTracker } from 'react-komposer';
import label from '../../../label/both/collection';
import AssignLabel from './../assignLabel.jsx';

function composer(props,onData){
  const subcription=Meteor.subscribe('getLabel');
  console.log(props);
if(subcription.ready()){
const labels=label.find({projectId:props.issue.projectId}).fetch();
  onData(null,{labels});
  }

};
export default composeWithTracker(composer)(AssignLabel);
