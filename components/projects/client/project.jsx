import React from 'react';

 Project= class Project extends React.Component{
   constructor(props) {
     super(props);
   }

   render(){

      var members=this.props.projectList.map(function(porject){
        return(<li className="collection-item avatar">
          <a><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
           <h6>{project.name}</h6>
          </a>
          </li>
        )
      })
     return(
       <div>
       <ul className="collection">
       {members}
     </ul>
       </div>
     )
   }
 }
export default Project;
