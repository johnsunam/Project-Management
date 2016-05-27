import React from 'react';

NonMembers= class NonMembers extends React.Component {
  constructor(props) {
    super(props);
  }
  addMember(e){
    e.preventDefault();
    var obj=this.props.members;
    obj._membersId.push(e.target.id);
    obj.addMember();
  }
  render(){

    var self=this;
    console.log(this.props);
       var lists= this.props.members._nonmembers.map(function(member){
      return(<li className="collection-item avatar">
        <a><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
         <h6>{member.firstname}&nbsp;{member.lastname}</h6>
        </a>
        <a className="btn pull-right" id={member._id} onClick={self.addMember.bind(self)}><i className="fa fa-plus" id={member._id}></i></a>
        </li>
      )
    })
    return(<div>
      <a className="modal-trigger waves-effect waves-light btn"  data-target="modal1"><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Members</a>
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
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this._addProject}>Add</a>
        </div>
      </div>
    </div>)
  }
}
