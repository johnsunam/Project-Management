import React from 'react';
import MembersDropdown from './container/membersdropdown';
import {Roles} from 'meteor/alanning:roles';
import Issue from './../client/container/issue';
Issues= class Issues extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){



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
  render(){
console.log(this.props);
var projectmember=this.props.project[0].projectmember;
var self=this;
  var issueList=this.props.issuesList.map(function(issue){
    var ids="Id"+issue._id;
    var issuesDetail={projectmember:projectmember,issue:issue};
    var status;
    if(issue.label){
      var style={background:issue.bgcolor};
      var con=issue.lbltxt;
    }
    else{
      var style={background:issue.bgcolor};
      var con=" ";
      //$('#label').addClass('hidden');
    }
    if(issue.status){
      status="close issue";
    }
    else{
      status="open issue"
    }
    var href='#'+issue._id;
    console.log(href);
    return(/*<li className="collection-item"><a className="pull-left" href={href}><i className="fa fa-exclamation-circle"></i>&nbsp;&nbsp;{issue.title}</a>
    &nbsp;&nbsp;<a className="waves-effect waves-light btn" id={issue.assigned} onClick={self.changeStatus.bind(issue)}>{status}</a>
    <a className={className} id="label">{con}</a>
<a className="waves-effect waves-light btn pull-right" id={issue.assigned} onClick={self.delete.bind(issue)}>Delete</a>
<a className='pull-right' href='#' id={ids} data-activates={issue._id} onClick={self.dropdown}>members</a>
<MembersDropdown issuesDetail={issuesDetail}/>

  </li>*/
  <div className="panel">
  <div className="panel-heading">
  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={href}> <i className="fa fa-exclamation-circle"></i>&nbsp;&nbsp;{issue.title} </a>
  <a className="label bg-light" style={style} id="label">{con}</a>&nbsp;&nbsp;<a className="btn btn-s-md btn-warning btn-rounded pull-right" id={issue.assigned} onClick={self.changeStatus.bind(issue)}>{status}</a>
  <a className="btn btn-s-md btn-danger btn-rounded pull-right" id={issue.assigned} onClick={self.delete.bind(issue)}>Delete</a>
  <div className="select btn-group " data-resize="auto">
   <MembersDropdown issuesDetail={issuesDetail}/>
  </div>

  </div>
   <div id={issue._id} className="panel-collapse collapse">
    <Issue issueId={issue._id}/>
  </div>
  </div>

)
  });
    return(
      /*<div className="well">
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
    </div>*/
  <div>

<a className="btn btn-s-md btn-default btn-rounded"  data-toggle="modal" data-target="#myModal"><i className="fa fa-plus"></i>&nbsp;&nbsp;New Issues</a>


<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title" id="myModalLabel">Issue</h4>
      </div>
      <div className="modal-body container">
      <div className="row">

      <div className="row">
          <div className="input-group">
            <input id="title" type="text" className="form-control "/>
            <label for="password">Isses Title</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
       <label for="comment">Comment:</label>
       <textarea class="form-control" rows="5" id="comment"></textarea>

     </div>
   </div>


</div>
      </div>

      <div className="modal-footer">
        <a href="#!" className="btn btn-s-md btn-success btn-rounded" data-dismiss="modal" onClick={this._addIsses.bind(this)}>Add</a>
      </div>

    </div>
  </div>
</div>
<hr/>
<div className="container">
<div className="panel-group m-b">
{issueList}
</div>
</div>
</div>
)
  }
}
 export default Issues;
