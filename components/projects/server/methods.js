import projects from './../both/collections';
Meteor.methods({
  'addProject':function(projectnam,creator){
projects.insert({projectname:projectnam,projectmember:[],issues:[],creator:creator});
  }
});
