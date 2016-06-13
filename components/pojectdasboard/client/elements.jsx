import React from 'react';
import NonMembers from './container/nonmembers';
import ProjectMembers from './container/projectmembers';
import Issues from '../../issues/client/container/issues';
import Discussion from '../../discussionforum/client/discussion';
import Chats from '../../chats/client/container/chats';
import Label from '../../label/client/container/label'
Elements= class Elements extends React.Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){

}
  render(){
var hgt={height:550}
      return(/*<div>
        <div className="row">
   <div className="">
     <ul className="tabs">
       <li className="tab col s3"><a className="active"href="#test1">project members</a></li>
       <li className="tab col s3"><a  href="#test2">Issues</a></li>
       <li className="tab col s3"><a href="#test3">Discussion forum</a></li>
      <li className="tab col s3"><a href="#test4">Chats</a></li>
      <li className="tab col s3"><a href="#test5">Labels</a></li>
     </ul>
   </div>
   <div id="test1" className="">
   <div className="well"><NonMembers members={this.props.data}/>
   <ProjectMembers members={this.props.data}/>
   </div>
   </div>
   <div id="test2" className="col s12"><Issues project={this.props.data}/></div>
   <div id="test3" className="col s12"><Discussion project={this.props.data}/></div>
   <div id="test4" className="col s12"><Chats project={this.props.data}/></div>
   <div id="test5" className="col s12"><Label project={this.props.data}/></div>
</div>
</div>*/
<section className="panel"style={hgt} >
 <header className="panel-heading bg-success">
  <ul className="nav nav-tabs nav-justified text-uc">
  <li className="active">
  <a href="#member" data-toggle="tab">Project Members</a>
  </li>
  <li className="">
  <a href="#issue" data-toggle="tab" value="">Issues</a>
  </li>
  <li className="">
  <a href="#discussion" data-toggle="tab">Discussion Forum</a>
  </li>
  <li className="">
  <a href="#chats" data-toggle="tab">Chats</a>
  </li>
  <li className="">
  <a href="#labels" data-toggle="tab">Labels</a>
  </li>
   </ul>
   </header>
   <div className="panel-body" >
   <div className="tab-content">
  <div className="tab-pane active" id="member">
  <div className="well"><NonMembers members={this.props.data}/>
  <ProjectMembers members={this.props.data}/>
  </div>
  </div>
  <div className="tab-pane" id="issue">
  <Issues project={this.props.data}/>
  </div>
  <div className="tab-pane" id="discussion">
  <Discussion project={this.props.data}/>
  </div>
  <div className="tab-pane" id="chats">
  <Chats project={this.props.data} types="private"/>
  </div>
  <div className="tab-pane" id="labels">
  <Label project={this.props.data}/>
  </div>
  </div>
  </div>
   </section>)
  }
}

export default Elements;
