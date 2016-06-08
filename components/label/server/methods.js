import label from './../both/collection';
Meteor.methods({
  'addLabel':function(labelname,bgcolor,projectId){
    label.insert({labelname:labelname,bgcolor:bgcolor,projectId:projectId});
  },
  'deleteLabel':function(labelId){
    label.remove(labelId);
  }
});
