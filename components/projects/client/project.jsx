import React from 'react';

 Project= class Project extends React.Component{
   constructor(props) {
     super(props);
   }

   render(){

      var projects=this.props.projs.map(function(project){
      var href="/projectdashboard/"+project._id;
        return(  <a href={href} className="collection-item"><i className="fa fa-briefcase"></i>&nbsp;&nbsp;{project.projectname}
</a>

        )
      })
     return(
       <div>
       <div className="collection">
       {projects}
     </div>
       </div>
     )
   }
 }
export default Project;
