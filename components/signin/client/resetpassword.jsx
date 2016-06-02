import React from 'react';

ResetPassword=class ResetPassword extends React.Component{
  constructor(props) {
    super(props);
  }
  _handleSubmit(e){
    e.preventDefault();
console.log(this.props.tokens);
    var password=$('#password').val();
  Accounts.resetPassword(this.props.tokens,password,function(error){
    if(error)
    {
      console.log(error.reason);
    }
    else{
      console.log("your password has been changed");
      FlowRouter.go("/");
    }
  });
  }
  render(){
    console.log(this.props);
    return(<div>
      <h1 > reset </h1>
    <div className="container">
    <div className="row col-md-4 well">
    <form>
            <div className="form-group">
             <label>Password</label>
             <input type="password" className="form-control" placeholder="password" id="password"/>
            </div>
            <button className="btn btn-primary" type="submit" onClick={this._handleSubmit.bind(this)}>reset password</button>
    </form>

    </div>
    </div>
</div>)
  }
}
export default ResetPassword;
