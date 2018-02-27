//dependencias
import React, { Component } from 'react';
//componentes o controles
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
import items from '../data/menu';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Paka Project" items={items}/>
        <Content />
        {/*<Footer copyright="&copy Codejobs 2018"/>*/}
        <Footer/>
      </div>
    );
  }
}

export default App;

