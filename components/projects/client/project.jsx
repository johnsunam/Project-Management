import React from 'react';

 Project= class Project extends React.Component{
   constructor(props) {
     super(props);
   }
   render(){
      var projects=this.props.projs.map(function(project){
      var href="/projectdashboard/"+project._id;
        return(  <div className="panel">
                    <div className="panel-heading">
                     <a className="accordion-toggle"href={href}>
                     <i className="fa fa-briefcase">
                    </i>
                         &nbsp;&nbsp;{project.projectname}
                         </a>
                         </div>
                           </div>)
      })
     return(<div>
       <h3>Projects</h3>
       <div className="panel-group m-b" id="accordion2">
         {projects}
                 </div>
     </div>)
   }
 }
export default Project;
