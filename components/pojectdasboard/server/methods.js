import projects from '../../projects/both/collections';
Meteor.methods({
  'addMember':function(id,members){
    projects.update(id, {
      $push: { projectmember:{$each:members}}
    });
  }
})
