import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';
import React from 'react';
import Issue from './../container/issue';

FlowRouter.route('/issue/:issueId',{
  name:'issue',
  action:function(params){
ReactLayout.render(MainLayout,{content:<Issue issueId={params.issueId}/>});
}
});
