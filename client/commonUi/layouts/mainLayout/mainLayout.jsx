import React from 'react';
import Header from '../../header/header';
MainLayout=class MainLayout extends React.Component{
 constructor(props){
   super(props)
 }

  render()
  {

    return(
      <div>
    <Header/>
      {this.props.content}
      <Footer/>
      </div>
    )
  }
}
