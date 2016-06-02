import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';

SignIn =class SignInp extends React.Component {
  handleForget(e){
    e.preventDefault();
    FlowRouter.go('/forgetpassword');
  }
   render()
   {
     return(<div>
      <h1 > SignIn </h1>
      <div className="container">
      <div className="row col-md-4 well">
      <form  >
              <div className="form-group">
               <label>Email</label>
               <input type="text" className="form-control" placeholder="email address" id="username"/>
              </div>
              <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Password" id="password"/>
              </div>

              <button className="btn btn-primary" type="submit" onClick={this._handleSubmit}>signup</button>
      </form>
        <a href="#" onClick={this.handleForget}>Forget password?</a>
      </div>

      </div>
       </div>)
   }
_handleSubmit(e){
  e.preventDefault();
      var detail={username:$('#username').val(),
      password:$('#password').val(),
    company:$('#company').val()
  };
      Meteor.loginWithPassword(detail.username,detail.password,function(error){
        if(error){
          console.log(error.reason);
        }
        else {
          FlowRouter.go("/home");
        }
      });


    }
  }
export default SignIn;
