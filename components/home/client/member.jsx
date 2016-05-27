import React from 'react';

 Members= class Members extends React.Component{
   constructor(props) {
     super(props);
   }

   render(){

      var members=this.props.memberList.map(function(member){
         var href="/userdasboard/"+member._id;
        return(<li className="collection-item avatar">
          <a href={href}><img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="" className="circle"/>
           <h6>{member.firstname}&nbsp;{member.lastname}</h6>
          </a>
          </li>
        )
      });
     return(
       <div>
       <ul className="collection">
       {members}
     </ul>
       </div>
     )
   }
 }
export default Members;
