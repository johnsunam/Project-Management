import React from 'react';

Label= class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state={color:null};
    this.state={colorClass: "grey lighten-4"};

  }
  changeColor(e){
    e.preventDefault();
    this.setState({color:e.target.id});
    this.setState({colorClass:e.target.className});

  }
  handleSubmit(e){
    e.preventDefault();
    var labelname=$('#label').val();
    console.log(this.state.colorClass);
    console.log(this.props.project[0]._id);
    Meteor.call('addLabel',labelname,this.state.colorClass,this.props.project[0]._id);
  }
  handleDelete(e){
    e.preventDefault();
    alert(e.target.id)
    Meteor.call('deleteLabel',e.target.id);
  }
  render(){
    var self=this;
    var labels=this.props.labels.map(function(label){
    var classes="waves-effect waves-light btn"+" "+label.bgcolor;
    return(<li className="collection-item"><a className={classes}><i className="fa fa-tags" aria-hidden="true">
      </i>{label.labelname}</a><a href="#" className="pull-right btn" id={label._id} onClick={self.handleDelete.bind(self)}><i id={label._id} className="fa fa-times" aria-hidden="true"></i><span id={label._id}>Delete</span></a></li>)
    });
    var liststyle={
      width:100
    };
    var background="background"+"-"+"color";
    var buttonColor={background:this.state.color};
    console.log(buttonColor);
    return(<div>
    <a className="waves-effect waves-light btn">New Label</a>
    <div className="well">
    <div className="row">
    <div className="input-field col s4">
      <input id="label" type="text" placeholder="label"/>
      <label for="password">Isses Title</label>
    </div>
    <div className="col s4">
    <a className='dropdown-button btn sample' style={buttonColor} href='#' data-activates='dropdown3'>select color</a>
  <ul id='dropdown3' className='dropdown-content'>
    <li onClick={this.changeColor.bind(this)} className="red darken-4" id="#b71c1c"><a href="#!"id="#b71c1c" className="red darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className="pink darken-4" id="#880e4f"><a href="#!" id="#880e4f" className="pink darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className=" purple darken-4" id="#311b92" ><a href="#!" id="#311b92" className=" purple darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className="purple accent-4" id="#6200ea"><a href="#!" id="#6200ea" className="purple accent-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className="blue darken-4" id="#01579b"><a href="#!" id="#01579b" className="blue darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className="green darken-4" id="#1b5e20"><a href="#!" id="#1b5e20" className="green darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className=" lime accent-3" id="#aeea00"><a href="#!" id="#aeea00" className=" lime accent-3"></a></li>
    <li onClick={this.changeColor.bind(this)} className="orange darken-4" id="#e65100"><a href="#!" id="#e65100" className="orange darken-4"></a></li>
    <li onClick={this.changeColor.bind(this)} className=" brown darken-4" id="#3e2723"><a href="#!" id="#3e2723" className=" brown darken-4"></a></li>
  </ul>
  </div>
  <div className="col s4">
  <div className="col s6">
<a className="waves-effect waves-light btn col s10" onClick={this.handleSubmit.bind(this)}>create</a>
</div>
<div className="col s6">
<a className="btn col s8">cancel</a>
</div>
</div>
    </div>
    </div>
    <div className="well col s12">
    <ul className="collection with-header">
{labels}
     </ul>
    </div>
      </div>)
  }
}

export default Label;
