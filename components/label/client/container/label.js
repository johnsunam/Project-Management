import { composeWithTracker } from 'react-komposer';
import Label from './../label.jsx';
import label from '../../both/collection';

function composer(props,onData){
const subcription=Meteor.subscribe('getLabel');
if(subcription.ready()){
  var labels=label.find({projectId:props.project[0]._id}).fetch();
  console.log(labels);
onData(null,{labels});
}

}
export default composeWithTracker(composer)(Label);
