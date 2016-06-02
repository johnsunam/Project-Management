import {Accounts} from 'meteor/accounts-base';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';

Accounts.onResetPasswordLink(function(token,done){
  var path="/resetToken/"+token;
FlowRouter.go(path);  
});
