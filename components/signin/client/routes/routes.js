import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import {mount} from 'react-mounter';
import SingIn from './../singin.jsx';
import ResetToken from './../resetpassword';

FlowRouter.route("/resetToken/:token",{
  name:'resetToken',
  action:function(params){
    console.log(params.token);
    ReactLayout.render(ResetToken,{tokens:params.token});
  }
});
