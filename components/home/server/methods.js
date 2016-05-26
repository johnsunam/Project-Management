import member from './../both/collections';
Meteor.methods({
  'addUser':function(userDetail){
   member.insert(userDetail);
  }
})
