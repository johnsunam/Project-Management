import React from 'react';
import MembersDropdown from './container/membersdropdown';
Issues= class Issues extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

    $('.modal-trigger').leanModal();
    this.dropdown();
  }

  _addIsses(e){
    e.preventDefault();
    console.log(this.props.project[0]._id);
    var id=this.props.project[0]._id;
    var title= $('#title').val(),
    comment=$('#comment').val();

  Meteor.call('addIssues',id,title,comment);
  }
  dropdown(e){
    e.preventDefault();
     var  Id="#"+e.target.id;
    $(Id).dropdown();
  }
  render(){

var projectmember=this.props.project[0].projectmember
var self=this;
  var issueList=this.props.issuesList.map(function(issue){
var ids="Id"+issue._id;
console.log(Meteor.user());
    var issuesDetail={projectmember:projectmember,issue:issue}
    return(<li className="collection-item"><a><i className="fa fa-exclamation-circle"></i>&nbsp;&nbsp;{issue.title}</a>
<a className='pull-right' href='#' id={ids} data-activates={issue._id} onClick={self.dropdown.bind(self)}>members</a>

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
