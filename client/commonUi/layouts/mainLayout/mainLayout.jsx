import React from 'react';
import Header from '../../header/header.js';
import Content from '../../../../components/content/client/content';
MainLayout=class MainLayout extends React.Component{
 constructor(props){
   super(props)
 }

  render()
  {
    return(
      <section className="hbox stretch">
    <Aside/>
    <section id="content">
    <section className="vbox">
    <Header/>
    <Content content={this.props.content}/>
</section>
</section>
      </section>
    )
  }
}

export default MainLayout;
