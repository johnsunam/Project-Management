import { composeWithTracker } from 'react-komposer';
import projects from '../../both/collections';
import Project from '.././project.jsx';

function composer(props,onData){
    const subcription= Meteor.subscribe('getProjects');

  if(subcription.ready()){
    const projectList= projects.find().fetch();
    var projs= new Array();
  if(Roles.userIsInRole(Meteor.userId(),'owner'))
  {
    var projs=_.where(projectList,{creator:Meteor.userId()});

  }
  else{
    _.each(projectList,function(pro){
      _.each(pro.projectmember,function(memberId){
        if(memberId == Meteor.userId())
        {
          projs.push(pro);
        }
      });
    });
    }
    console.log(projs);
    onData(null,{projs});
  }
};
export default composeWithTracker(composer)(Project);
