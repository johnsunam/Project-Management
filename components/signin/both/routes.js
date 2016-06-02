import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import {mount} from 'react-mounter';
//import SingIn from './../singin.jsx';


FlowRouter.route("/",{
  name:'signin',
  action:function(){
    ReactLayout.render(SignIn,{});
  }
});
FlowRouter.route("/forgetpassword",{
  name:'signin',
  action:function(){
    ReactLayout.render(Forgetpassword,{});
  }
});
