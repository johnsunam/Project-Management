import projects from '../../projects/both/collections';
Meteor.methods({
  'addMember':function(id,members){
    projects.update(id, {
      $push: { projectmember:{$each:members}}
    });
  },
  'deleteMember':function(id,latestmember){
    projects.update(id,{
      $set:{projectmember:latestmember}
    });
  }
})
