import { composeWithTracker } from 'react-komposer';
import NonMembers from './../NomMembers';
import member from '../../../home/both/collections';
function composer(props,onData){
const subcription=Meteor.subscribe('getMembers');
console.log(props.members);
if(subcription.ready()){
  var companyMembers=member.find().fetch();
  console.log(companyMembers);
  nonmembers=companyMembers;
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
