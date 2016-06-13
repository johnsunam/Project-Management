import React from 'react';
import Members from '././container/Member.js';

Main= class Main extends React.Component {
  componentDidMount(){
    if(!Roles.userIsInRole(Meteor.userId(),'owner')){
      document.getElementById("addUser").style.visibility="hidden";
    }

  }
  _addUser(){
   var userDetail={
     firstname:$('#first_name').val(),
     lastname:$('#last_name').val(),
     email:$('#email').val(),
     creator:Meteor.userId()
   }
   Meteor.call('addUser',userDetail,function(error){
     if(!error)
     {

     }
   });

  }
  render(){
    var hgt={height:500}
    return(<div className="" style={hgt}>
    <div>
    <a className="btn btn-s-md btn-default btn-rounded" id="addUser" data-toggle="modal" data-target="#userModal">
    &nbsp;&nbsp;Users
    </a>
    <hr/>
    </div>
<div id="userModal" className="modal fade " role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add Project</h4>
      </div>
      <div className="modal-body">
      <div className="container">
        <form className="">
          <div className="row">
            <div className="input-group ">
            <label for="firstname">First Name:</label>
              <input  id="first_name" type="text" placeholder="firstname" className="form-control"/>
            </div>
            </div>
            <div className="row">
            <div className="input-group">
              <label for="lastname">Last Name:</label>
              <input id="last_name" type="text" placeholder="lastname" className="form-control"/>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
            <label for="email">Email:</label>
              <input id="email" type="email" placeholder="email"className="form-control"/>
            </div>
          </div>
        </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this._addUser}>Add</button>
      </div>
    </div>

  </div>
</div>
<Members/>
    </div>)
  }


}

export default Main;
