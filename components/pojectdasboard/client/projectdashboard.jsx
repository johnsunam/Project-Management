import React from 'react';

Projectdashboard= class Projectdashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $('.modal-trigger').leanModal();
  }
  render(){
    console.log(this.props.id);
    return(<div className="col s8  pull-left">
    <a className="modal-trigger waves-effect waves-light btn"  data-target="modal1"><i className="fa fa-plus"></i>&nbsp;&nbsp;Project Member</a>
      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <div className="row">
       <ul className="collection">

       </ul>
     </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this._addUser}>Add</a>
        </div>
      </div>

      </div>)
  }
}

export default Projectdashboard;
