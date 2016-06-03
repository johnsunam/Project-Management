import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
Accounts.onCreateUser(function(options,user){
  user.roles=options.roles,
  user.firstname=options.firstname,
  user.lastname=options.lastname,
  user.creator=options.creator,
  user.assignedIssues=[]
return user;
});
