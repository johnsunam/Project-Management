import React from 'react';

NonMembers= class NonMembers extends React.Component {
  constructor(props) {
    super(props);
  }
  addMember(e){
    e.preventDefault();
    var obj=this.props.members[0]._id;
     var arr=new Array();
     arr.push(e.target.id)
  Meteor.call('addMember',obj,arr);

  }
  componentDidMount(){

    if(!Roles.userIsInRole(Meteor.userId(),'owner')){
      document.getElementById("addmembers").style.visibility="hidden";
    }
  }
  render(){

    var self=this;
    console.log(this.props.nonmembers);
       var lists= this.props.nonmembers.map(function(member){
      return(/*<li className="collection-item avatar">
        <a><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
         <h6>{member.firstname}&nbsp;{member.lastname}</h6>
        </a>
        <input type="checkbox" id="myCheckbox" class="filled-in" />
        <a className="btn pull-right" id={member._id} onClick={self.addMember.bind(self)}><i className="fa fa-plus" id={member._id}></i></a>
        </li>*/
        <li className="list-group-item">
               <div className="media">
                  <span className="pull-left thumb-sm">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="John said" className="img-circle"/>
                  </span>
                  <a className="btn pull-right" id={member._id} onClick={self.addMember.bind(self)}><i className="fa fa-plus" id={member._id}></i></a>
                 </div>
                 <div className="media-body">
                   <div>
                     {member.firstname}&nbsp;{member.lastname}
                     <label className="label bg-dark m-l-xs">{member.roles}
                     </label>
                   </div>
                    <small className="text-muted">about 2 minutes ago</small>
                   </div>
                 </li>
      )
    })
    return(/*<div>
      <a className="modal-trigger waves-effect waves-light btn" id="addmembers" data-target="modal1"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Members</a>
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Non Member List</h4>
          <div className="row">
            <ul className="collection">
            {lists}
            </ul>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Add</a>
        </div>
      </div>
    </div>*/
    <div>
    <div>
    <a className="btn btn-s-md btn-default btn-rounded" id="addMember" data-toggle="modal" data-target="#modal1">
    &nbsp;&nbsp;Users
    </a>
    <hr/>
    </div>
<div id="modal1" className="modal fade " role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
    <h4>Non Member List</h4>
    <section className="panel">
     <header className="panel-heading">
     <div className="input-group">
<span className="input-group-addon" id="basic-addon1"><i className="fa fa-search"></i></span>
<input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
</div>
           </header>
           <ul className="list-group alt">
{lists}
           </ul>
           </section>

      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this._addUser}>Add</button>
      </div>
    </div>

  </div>
</div>
</div>)
  }
}

export default NonMembers;
