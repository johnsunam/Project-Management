import discussion from './../both/collection';

Meteor.methods({
  'addChat':function(content,projectId){
    var user= Meteor.user();
    var username=user.firstname+" "+user.lastname;
     var date= new Date();
     discussion.insert({username:username,project:projectId,content:content,createAt:Date.parse(date)});
    //discussion.insert()
  }
})
