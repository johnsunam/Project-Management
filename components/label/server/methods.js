import label from './../both/collection';
Meteor.methods({
  'addLabel':function(labelname,bgcolor,projectId){
    label.insert({labelname:labelname,bgcolor:bgcolor,projectId:projectId,issuenumber:0});
  },
  'deleteLabel':function(labelId){
    label.remove(labelId);
  }
});
