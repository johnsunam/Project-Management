import chats from './../both/collection';

Meteor.methods({
  'addConversation':function(content,partnerId){
var fname=Meteor.user().firstname;
var lname=Meteor.user().lastname;
var fullname=fname+" "+lname;
    chats.insert({name:fullname,content:content,from:Meteor.userId(),to:partnerId});
  },
  'removeChat':function(partnerId){
    chats.remove({$and:[
      {$or:[{from:partnerId},{from:Meteor.userId()}]},
      {$or:[{to:partnerId},{to:Meteor.userId()}]}
    ]});

  }
});
