import { composeWithTracker } from 'react-komposer';
import porjects from '../../both/collections';
import Project from '.././project';

function composer(props,onData){
    const subcription= Meteor.subscribe('getProjects');
    
  if(subcription.ready()){
    const projectList= projects.find().fetch();
    onData(null,{projectList});
  }
};
export default composeWithTracker(composer)(Project);
