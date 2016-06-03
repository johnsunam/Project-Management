import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';
import {FlowRouter} from 'meteor/kadira:flow-router';

SignUp =class SignUp extends React.Component {
   render()
   {
     return(<div>
      <h1 > Signup </h1>
      <div className="container">
      <div className="row col-md-4 well">
      <form  >
              <div className="form-group">
               <label>UserName</label>
               <input type="text" className="form-control" placeholder="email address" id="username"/>
              </div>
              <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Password" id="password"/>
              </div>
              <div className="form-group">
               <label>Company</label>
               <input type="text" className="form-control" placeholder="Company" id="company"/>
              </div>
              <button className="btn btn-primary" type="submit" onClick={this._handleSubmit}>signup</button>
      </form>
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
       Accounts.createUser({email:detail.username,password:detail.password,roles:"owner",firstname:"john",lastname:"sunam",creator:""},function(error){
         if(error){
           console.log(error.reason);
         }
         else{
           FlowRouter.go('/home');
         }
       });


    }
  }
export default SignUp;
