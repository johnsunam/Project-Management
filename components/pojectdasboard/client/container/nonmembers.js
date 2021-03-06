import { composeWithTracker } from 'react-komposer';
import NonMembers from './../NomMembers';
import member from '../../../home/both/collections';
function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
if(subcription.ready()){
  var companyMembers=Meteor.users.find({creator:Meteor.userId()}).fetch();
  console.log(companyMembers);
   var nonmembers=companyMembers;
  var members=props.members[0].projectmember;
  if(members.length==0)
  {
    onData(null,{nonmembers});
  }
  else{
    _.each(members,function(num){
      nonmembers =_.filter(nonmembers,function(mem){
            if(num!=mem._id)
            {
                      return mem;
            }
    });
    });
    console.log(nonmembers);
    onData(null,{nonmembers});
  }

    }

  }

export default composeWithTracker(composer)(NonMembers);
