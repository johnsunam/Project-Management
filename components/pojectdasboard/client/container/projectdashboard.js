import { composeWithTracker } from 'react-komposer';
import ProjectClass from '../../lib/projectClass';
import Projectdashboard from './../projectdashboard';

function composer(props,onData){
    //const subcription= Meteor.subscribe('getMembers');
    var obj= new ProjectClass();

    onData(null,{});
  }

export default composeWithTracker(composer)(Projectdashboard);
