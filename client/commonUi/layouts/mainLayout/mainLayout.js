import {composeWithTracker} from 'react-komposer';
import MainLayout from './mainLayout.jsx';
import {FlowRouter} from 'meteor/kadira:flow-router';
function composer(props,onData){

  if(Meteor.userId()){
    const data=Meteor.userId();
    onData(null,{data});
  }
  else{
    FlowRouter.go('/');
  }
};
export default composeWithTracker(composer)(MainLayout);
