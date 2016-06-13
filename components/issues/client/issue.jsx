import React from 'react';
import AssignLabel from './container/assignLabel';
Issue= class Issue extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.detail.issue[0].label);
    if(this.props.detail.issue[0].label){
        var con=this.props.detail.issue[0].lbltxt;
        var style={background:this.props.detail.issue[0].bgcolor}
    }
    else{
      var style={background:""};
    var con=" ";
    }
 var href="/projectdashboard/"+this.props.detail.project[0]._id;
 var type="list-style-type";
 var ulstyle={type: "none"}
    return(<div className="container">
      <h4><a href={href}>{this.props.detail.project[0].projectname}</a>/{this.props.detail.issue[0].title} </h4>
      <hr/>
      <div className="">
      <div className="col-md-6">
                <div className="panel panel-default">
                <div className="panel-heading">Comments</div>
                <div className="panel-body">
                  {this.props.detail.issue[0].comment}
                </div>
                </div>
      </div>
      <div className="col-md-3">
      <button className="badge" style={style} name="action">{con}</button>
</div>
      <div className="col-md-3">
        <AssignLabel issue={this.props.detail.issue[0]}/>


      </div>
      </div>
      </div>)
  }
}
export default Issue;
