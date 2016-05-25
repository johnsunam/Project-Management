import React from 'react';
import {Meteor} from 'meteor/meteor';
SingUp=class SignUp extends React.Component {
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
      Meteor.call("createAccount",detail,function(error){
        if(!error)
        {
          Meteor.loginWithPassword(detail.username,detail.password,function(err){
            if(err)
            {
              console.log(err.reason);
            }
            else {
                FlowRouter.go('/home');
            }
          });

        }
        else {
          alert(error.reason);
        }
      });

}
 }
