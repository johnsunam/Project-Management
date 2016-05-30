import { composeWithTracker } from 'react-komposer';
import ProjectClass from '../../lib/projectClass';
import Elements from './../elements';
import projects from '../../../projects/both/collections';
function composer(props,onData){
const subcription=Meteor.subscribe('getProjects');
if(subcription.ready()){
 const data=projects.find({_id:props.id}).fetch();
    onData(null,{data});
    }

  }

export default composeWithTracker(composer)(Elements);
