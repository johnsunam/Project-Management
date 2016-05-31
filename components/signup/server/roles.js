import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
Accounts.onCreateUser(function(options,user){
  user.roles="owner";
return user;
});
