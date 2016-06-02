import { composeWithTracker } from 'react-komposer';
import discussion from './../both/collection';
import Discussion from './../client/discussion.jsx';

function composer(props,onData){
const subcription=Meteor.subscribe('getdiscussion');
if(subcription.ready()){
 const data=discussion.find({project:props.project[0]._id}, {sort: {date_created: -1}}).fetch();
 console.log(data);
    onData(null,{data});
    }

  }

export default composeWithTracker(composer)(Discussion);
