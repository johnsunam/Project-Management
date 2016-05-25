import React from 'react';

Main= class Main extends React.Component {
  componentDidMount(){
    $('.modal-trigger').leanModal();
  }
  render(){

    return(<div className="container main">
  <a className="modal-trigger waves-effect waves-light btn"  data-target="modal1"><i className="fa fa-plus"></i>&nbsp;&nbsp;Users</a>


    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <div className="row">
     <form className="col s12">
       <div className="row">
         <div className="input-field col s6">
           <input  id="first_name" type="text" className="validate"/>
           <label for="first_name">First Name</label>
         </div>
         <div className="input-field col s6">
           <input id="last_name" type="text" className="validate"/>
           <label for="last_name">Last Name</label>
         </div>
       </div>

       <div className="row">
         <div className="input-field col s12">
           <input id="email" type="email" className="validate"/>
           <label for="email">Email</label>
         </div>
       </div>
     </form>
   </div>

      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this._addUser}>Add</a>
      </div>
    </div>

    </div>)
  }
  _addUser(){
   var userDetail={
     firstname:$('#first_name').val(),
     lastname:$('#last_name').val(),
     email:$('#email').val()
   }
   console.log(userDetail);
  }
}

export default Main;
