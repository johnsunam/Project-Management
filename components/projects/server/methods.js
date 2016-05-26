import projects from './../both/collections';
Meteor.methods({
  'addProject':function(projectnam){
projects.insert({projectname:projectnam});
  }
});
