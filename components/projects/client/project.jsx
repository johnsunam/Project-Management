import React from 'react';

 Project= class Project extends React.Component{
   constructor(props) {
     super(props);
   }

   render(){

      var projects=this.props.projectList.map(function(project){
        return(<li className="collection-item">
          <a><span> <i className="fa fa-briefcase"></i>&nbsp;&nbsp;{project.projectname}</span>
</a>
          </li>
        )
      })
     return(
       <div>
       <ul className="collection">
       {projects}
     </ul>
       </div>
     )
   }
 }
export default Project;
