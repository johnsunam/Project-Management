import React from 'react';
import AssignLabel from './container/assignLabel';
Issue= class Issue extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.issue[0].label);
    if(this.props.issue[0].label){
      var className="btn waves-effect waves-light pull-right"+" "+this.props.issue[0].bgcolor;
      var con=this.props.issue[0].lbltxt;
    }
    else{
      var className="btn waves-effect waves-light pull-right";
      var con=" ";
    }
    return(<div>
      <h4>{this.props.issue[0].title} </h4>
      <hr/>
      <div className="col s12">
      <div className="col s8">
                <div className="panel panel-default">
                <div className="panel-heading">Comments</div>
                <div className="panel-body">
                  {this.props.issue[0].comment}
                </div>
                </div>
      </div>
      <div className="pull-right col s4">
      <ul>
      <li>
      <AssignLabel issue={this.props.issue[0]}/>
      </li>
      <li>
      <button className={className} type="submit" name="action">{con}</button>
      </li>
      </ul>
      </div>
      </div>
      </div>)
  }
}
export default Issue;
