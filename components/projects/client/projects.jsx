import React from 'react';
import Project from './container/Project';

Projects= class Projects extends React.Component {
  componentDidMount(){
    $('.modal-trigger').leanModal();
    if(!Roles.userIsInRole(Meteor.userId(),'owner')){
      document.getElementById("addProject").style.visibility="hidden";
    }
  }
  render(){
    return(
    <div>
    <a  className="btn btn-s-md btn-default btn-rounded" id="addProject" data-toggle="modal" data-target="#myModal">
    Open Modal</a>
<hr/>

<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add Project</h4>
      </div>
      <div className="modal-body">
      <form className="">
        <div className="row">
          <div className="form-group col-md-6">
          <label for="project_name">Project Name</label>
            <input  id="project_name" type="text" className="form-control"/>

          </div>
          </div>
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this._addProject}>Add</button>
      </div>
    </div>

  </div>
</div>
    <Project/>
    </div>)
  }
  _addProject(){
    var creator=Meteor.userId();
   Meteor.call('addProject',$('#project_name').val(),creator,function(error){
     if(!error)
     {

     }
   });

  }
}

export default Projects;
