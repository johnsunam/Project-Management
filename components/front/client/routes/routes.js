import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '../../../../client/commonUi/layouts/mainLayout/mainLayout';
import Front from '../../client/front';

FlowRouter.route("/home",{
  name:'front',
  action:function(){
    ReactLayout.render(MainLayout,{content:<Front/>});
  }
});
