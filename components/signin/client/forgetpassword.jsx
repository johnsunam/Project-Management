import React from 'react';
import {Accounts} from 'meteor/accounts-base';

Forgetpassword= class Forgetpassword extends React.Component {
  constructor(props) {
    super(props);
  }
  _handleSubmit(e){
    e.preventDefault();
    var email=$('#email').val();
    var options={email:email};
    Accounts.forgotPassword(options, function(err){
    if (err) {
        console.log("error: "+err.reason);
    } else {
        console.log("Success!");
    }
    
});
  }
  render(){
    return(<div>
      <h1 > SignIn </h1>
    <div className="container">
    <div className="row col-md-4 well">
    <form>
            <div className="form-group">
             <label>Email</label>
             <input type="text" className="form-control" placeholder="email address" id="email"/>
            </div>
            <button className="btn btn-primary" type="submit" onClick={this._handleSubmit}>reset password</button>
    </form>

    </div>
    </div>
</div>
)
}
}
export default Forgetpassword;
