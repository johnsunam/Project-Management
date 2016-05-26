import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';

FlowRouter.route("/projects",{
  name:'singup',
  action:function(){
    ReactLayout.render(MainLayout,{content:<Projects/>});
  }
});
