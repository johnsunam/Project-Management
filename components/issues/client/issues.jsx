import React from 'react';
import MembersDropdown from './container/membersdropdown';
import {Roles} from 'meteor/alanning:roles';
Issues= class Issues extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

$('.modal-trigger').leanModal();
    this.dropdown();
  }
changeStatus(e){
  e.preventDefault();
console.log(this);
var state;

  if(Meteor.userId==e.target.id || Roles.userIsInRole(Meteor.userId(),'owner') )
  {
      state=!this.status;
    Meteor.call('updateStatus',this._id,state);
  }
  else{
    alert('you need to be owner or assigned user');
  }
}
  _addIsses(e){
    e.preventDefault();
    console.log(this.props.project[0]._id);
    var id=this.props.project[0]._id;
    var title= $('#title').val(),
    comment=$('#comment').val(),
    creator=Meteor.userId();
  Meteor.call('addIssues',id,title,comment,creator);
  }
  delete(e){
    e.preventDefault();
    if(this.creator==Meteor.userId() || this.assigned == Meteor.userId() || Roles.userIsInRole(Meteor.userId(),'owner'))
{
  console.log(this);
  Meteor.call('deleteIssue',this._id);
}
  }
  dropdown(e){
    e.preventDefault();
     var  Id="#"+e.target.id;
    $(Id).dropdown();
  }
  render(){
console.log(this.props);
var projectmember=this.props.project[0].projectmember;
var self=this;
  var issueList=this.props.issuesList.map(function(issue){
    var ids="Id"+issue._id;
    var issuesDetail={projectmember:projectmember,issue:issue};
    var status;
    if(issue.label){
      var className="btn waves-effect waves-light pull-right"+" "+issue.bgcolor;
      var con=issue.lbltxt;
    }
    else{
      var className="btn waves-effect waves-light pull-right";
      var con=" ";
      $('#label').addClass('hidden');
    }
    if(issue.status){
      status="close issue";
    }
    else{
      status="open issue"
    }
    var href='/issue/'+issue._id;
    return(<li className="collection-item"><a className="pull-left" href={href}><i className="fa fa-exclamation-circle"></i>&nbsp;&nbsp;{issue.title}</a>
    &nbsp;&nbsp;<a className="waves-effect waves-light btn" id={issue.assigned} onClick={self.changeStatus.bind(issue)}>{status}</a>
    <a className={className} id="label">{con}</a>
<a className="waves-effect waves-light btn pull-right" id={issue.assigned} onClick={self.delete.bind(issue)}>Delete</a>
<a className='pull-right' href='#' id={ids} data-activates={issue._id} onClick={self.dropdown}>members</a>
<MembersDropdown issuesDetail={issuesDetail}/>

  </li>)
  });
    return(
      <div className="well">
    <a className="modal-trigger waves-effect waves-light btn"  data-target="issues"><i className="fa fa-plus"></i>&nbsp;&nbsp;New Issues</a>
    <div id="issues" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Issues</h4>
        <div className="row">
        <form className="col s12">
        <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate"/>
              <label for="password">Isses Title</label>
            </div>
          </div>
          <div class="row">
       <div class="input-field col s12">
         <textarea id="comment" class="materialize-textarea"></textarea>
         <label for="textarea1">Comment</label>
       </div>
     </div>
        </form>

</div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this._addIsses.bind(this)}>Add</a>
      </div>
    </div>
</div>
<ul className="collection">
{issueList}
</ul>
    </div>)
  }
}
 export default Issues;
