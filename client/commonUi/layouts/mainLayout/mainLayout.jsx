import React from 'react';
import Header from '../../header/header';
import Content from '../../../../components/content/client/content'
MainLayout=class MainLayout extends React.Component{
 constructor(props){
   super(props)
 }

  render()
  {
    return(
      <div>
    <Header/>
    <Content content={this.props.content}/>
      
      </div>
    )
  }
}
