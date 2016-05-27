import { composeWithTracker } from 'react-komposer';
import ProjectClass from '../../lib/projectClass';
import Elements from './../elements';

function composer(props,onData){

    var obj= new ProjectClass(props.id);
     var nonMembers=obj.getNonMember();
    onData(null,{obj});
  }

export default composeWithTracker(composer)(Elements);
