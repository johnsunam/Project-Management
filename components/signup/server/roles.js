import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
Accounts.onCreateUser(function(options,user){
  console.log(user._id);
 Roles.addUsersToRoles(user._id,['owner']);
 return user;
});
