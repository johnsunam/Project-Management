import React from 'react';

AssignLabel= class AssignLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right' // Displays dropdown with edge aligned to the left of button
    }
  );
  }
  chooseLabel(e){
    e.preventDefault();
   var txt=document.getElementById(e.target.id).innerText;
   console.log(this.props.issue);

   Meteor.call('updateNumber',this.props.issue.label,e.target.id);
   Meteor.call('tagLabel',e.target.id,this.props.issue._id,txt,e.target.className);

  }
  render(){
    var self=this;

    var labelList=this.props.labels.map(function(label){
var style={background:label.bgcolor};
      return(<li className={label.bgcolor} style={style }  id={label._id} onClick={self.chooseLabel.bind(self)}>{label.labelname}</li>)
    });

    return(<div>
      <a className='btn btn-success dropdown-toggle'data-toggle="dropdown">labels</a>
  <ul id='label' className='dropdown-menu'>
    {labelList}
  </ul>

    </div>
   ) }
}
export default AssignLabel;
