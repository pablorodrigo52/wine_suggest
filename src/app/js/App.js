import React from 'react';
import '../css/App.css';
import Header from './Header.js';
import Content from './Content.js';
import Widget from './Widget.js';
import Request from '../js/helper/Request.js';
// import Footer from './Footer.js';

function App() {
  const req = new Request();
  console.log(req);
  console.log('---- iniciando requisição ----');
  req.get("https://api.globalwinescore.com/globalwinescores/latest/");

  return (
    <div className="App">
      <section className="data-content">
        <header>
          <Header menu='1'/>
        </header>
        <main>
          <Content/>
        </main>
      </section>
      <section className="user-escape">
        <header>
          <Header menu='2'/>
          <Widget/>
        </header>
      </section>
    </div>
  );
}



export default App;
