import member from './../both/collections';
import {Accounts} from 'meteor/accounts-base';
Meteor.methods({
  'addUser':function(userDetail){
    var password="wsnepal123";
   Accounts.createUser({email:userDetail.email,password:password,roles:"user",firstname:userDetail.firstname,lastname:userDetail.lastname});
  }
})
