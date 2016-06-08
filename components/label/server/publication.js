import label from './../both/collection';

Meteor.publish('getLabel',function(){
  return label.find();
});
