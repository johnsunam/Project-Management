import {Meteor} from 'meteor/meteor';
 import {Accounts} from 'meteor/accounts-base';
 import {Roles} from 'meteor/alanning:roles';
Meteor.methods({
  'createAccount':function(detail){
  var id=Accounts.createUser({email:detail.username,password:detail.password});
   Roles.addUsersToRoles(id,['owner'],detail.company);
  }
});
