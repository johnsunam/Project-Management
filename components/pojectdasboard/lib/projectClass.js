import projects from '../../projects/both/collections';
import  member from  '../../home/both/collections';
 ProjectClass=class ProjectClass{
  constructor(project){
      this._projectId=project._id;
      this._project=project;
      this._nonmembers=[];
      this._companyMembers=[];
      this._projectmembers=[];
      this._membersId=[];

  }
  getNonMember(){
     var self=this;
      this.getCompanyMembers();
      console.log(this._companyMembers);
    this.getProjectMembers();
    this._nonmembers=this._companyMembers;
    var members=this._projectmembers;
    if(members.length==0)
    {
      this._nonmembers=this._companyMembers;
    }
    else{
      console.log(members);
      _.each(members,function(num){
        console.log(num);
        self._nonmembers =_.filter(self._nonmembers,function(member){
              if(num._id!=member._id)
              {
                        return member;
                }
      });

      });
    }
  }
  getProjectMembers(){
    self=this;
    console.log(this.project[0]);
    _.each(self._project[0].projectmember,function(member){
    var single=_.findWhere(self._companyMembers,{_id:member});
    self._projectmembers.push(single);
    })

  }
  getCompanyMembers(){
    var subcription=Meteor.subscribe('getMembers');
    this._companyMembers=member.find().fetch();
      }
  addMember(){
    Meteor.call('addMember',this._projectId,this._membersId,function(error,result){
      if(!error)
      {
        console.log('sucessfully stored');
      }
    })
  }
}







export default ProjectClass;
