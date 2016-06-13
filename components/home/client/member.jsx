import React from 'react';

 Members= class Members extends React.Component{
   constructor(props) {
     super(props);
   }

   render(){

      var members=this.props.memberList.map(function(member){
        console.log(member);
         var href="/userdasboard/"+member._id;
        return(<li className="list-group-item">
               <div className="media">
                  <span className="pull-left thumb-sm">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNlRe6gw2bdrGcRgzizskRI1CEOeMMikpDMNQxOjkoFwlAyx2SHw" alt="John said" className="img-circle"/>
                  </span>
                  <div className="pull-right text-success m-t-sm">
                    <i className="fa fa-circle">
                  </i>
                 </div>
                 <div className="media-body">
                   <div>
                     <a href={href}>{member.firstname}&nbsp;{member.lastname}</a>
                     <label className="label bg-dark m-l-xs">{member.roles}
                     </label>
                   </div>
                    <small className="text-muted">about 2 minutes ago</small>
                   </div>
                  </div>
                 </li>

           )
      });
     return(<div>
       <section className="panel">
        <header className="panel-heading">
        <div className="input-group">
<span className="input-group-addon" id="basic-addon1"><i className="fa fa-search"></i></span>
<input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon1"/>
</div>
              </header>
              <ul className="list-group alt">
{members}
              </ul>
              </section>
         </div>
     )
   }
 }
export default Members;
