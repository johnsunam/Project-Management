import React from 'react';

Label= class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state={background:""}
  }
  changeColor(e){
    e.preventDefault();
    this.setState({background:e.target.id});
    $("#colorButton").css('background',e.target.id);
  }
  handleSubmit(e){
    e.preventDefault();
    var labelname=$('#labelname').val();
    Meteor.call('addLabel',labelname,this.state.background,this.props.project[0]._id);
  }
  handleDelete(e){
    e.preventDefault();
    if(this == 0){
   Meteor.call('deleteLabel',e.target.id);
 }
 else {
   alert('this label has been tagged with issue');
 }
  }

  render(){
    var self=this;
    var styles=[{background:"#b71c1c"},
  {background:"#880e4f"},
{background:"#311b92"},
{background:"#6200ea"},
{background:"#1b5e20"},
{background:"#aeea00"}]

    var labels=this.props.labels.map(function(label){
  var labelStyle={background:label.bgcolor};
    return(<li className=""><a className="btn btn-s-md btn-default btn-rounded" style={labelStyle}><i className="fa fa-tags" aria-hidden="true">
      </i>{label.labelname}</a><a href="#" className="pull-right btn btn-s-md btn-danger btn-rounded" id={label._id} onClick={self.handleDelete.bind(label.issuenumber)}><i id={label._id} className="fa fa-times" aria-hidden="true"></i><span id={label._id}>Delete</span></a><hr/></li>)
    });
    var liststyle={
      width:100
    };
var colors=styles.map(function(color){
      return(
        <li onClick={self.changeColor.bind(self)}  id={color.background} style={color}><a href="#!"id={color.background}></a></li>)
    })
    return(/*<div>
    <a className="waves-effect waves-light btn">New Label</a>
    <div className="well">
    <div className="row">
    <div className="input-field col s4">
      <input id="labelname" type="text" placeholder=""/>
      <label for="labelname">Label Name</label>
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
      </div>*/
<div>
  <a className="accordion-toggle collapsed btn btn-s-md btn-info btn-rounded"data-toggle="collapse" data-parent="#accordion2" href="components.html#collapseOne"> <i className="fa fa-plus"></i>Label</a>
<div id="collapseOne" className="panel-collapse collapse">
<div className="panel-body text-sm">
<div className="well">
<div className="row">
<div className="input-group">
  <input id="labelname" type="text" className="form-control"placeholder="Label Name"/>
</div>
<div className="pull-right">
<button className="btn btn-s-md btn-white btn-rounded dropdown-toggle" id="colorButton" data-toggle="dropdown">
Color
<span className="caret"></span>
</button>

<ul className="dropdown-menu">
{colors}
</ul>
</div>
<hr/>
<div className="">
<a className="btn btn-s-md btn-success btn-rounded" onClick={this.handleSubmit.bind(this)}>create</a>
</div>
</div>
</div></div>
</div>
<div className="well">
<ul className="">
{labels}
 </ul>
</div>
</div>)

  }
}

export default Label;
