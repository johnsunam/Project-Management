import React from 'react';
import Projects from '../../projects/client/projects';

ProjectSide= class ProjectSide extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <aside className="b-l aside-lg bg-light">
       <section className="wrapper">
       <Projects/>
</section>
</aside>
                       )
  }
}
export default ProjectSide;
