import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../../../../client/commonUi/layouts/mainLayout/mainLayout';

FlowRouter.route("/home",{
  name:'singup',
  action:function(){
    ReactLayout.render(MainLayout,{content:<Main/>});
  }
});
