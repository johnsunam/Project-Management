import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactLayout} from 'meteor/kadira:react-layout';

FlowRouter.route("/signup",{
  name:'singup',
  action:function(){
    ReactLayout.render(SignUp,{});
  }
});
