import React from 'react';
import NonMembers from './container/nonmembers';
import ProjectMembers from './container/projectmembers';
import Issues from '../../issues/client/container/issues';
import Discussion from '../../discussionforum/client/discussion';
Elements= class Elements extends React.Component {
  constructor(props) {
    super(props)
  }
componentDidMount(){
  $('.modal-trigger').leanModal();
   $('ul.tabs').tabs();
   $('ul.tabs').tabs('select_tab', 'tab_id');
}
  render(){

      return(<div>
        <div className="row">
   <div className="col s12">
     <ul className="tabs">
       <li className="tab col s3"><a className="active"href="#test1">project members</a></li>
       <li className="tab col s3"><a  href="#test2">Issues</a></li>
       <li className="tab col s3"><a href="#test3">Discussion forum</a></li>
     </ul>
   </div>
   <div id="test1" className="col s12">
   <div className="well"><NonMembers members={this.props.data}/>
   <ProjectMembers members={this.props.data}/>
   </div>
   </div>
   <div id="test2" className="col s12"><Issues project={this.props.data}/></div>
   <div id="test3" className="col s12"><Discussion project={this.props.data}/></div>
</div>
</div>)
  }
}

export default Elements;
