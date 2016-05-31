import React from 'react';
import Project from './container/Project';

Projects= class Projects extends React.Component {
  componentDidMount(){
    $('.modal-trigger').leanModal();
  }
  render(){
    return(
      <div className="col s8  pull-left">
  <a className="modal-trigger waves-effect waves-light btn"  data-target="modal1"><i className="fa fa-plus"></i>&nbsp;&nbsp;Projects</a>
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <div className="row">
     <form className="col s12">
       <div className="row">
         <div className="input-field col s6">
           <input  id="project_name" type="text" className="validate"/>
           <label for="project_name">Project Name</label>
         </div>
         </div>
     </form>
   </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this._addProject}>Add</a>
      </div>
    </div>
    <Project/>
    </div>)
  }
  _addProject(){
   Meteor.call('addProject',$('#project_name').val(),function(error){
     if(!error)
     {

     }
   });

  }
}

export default Projects;
