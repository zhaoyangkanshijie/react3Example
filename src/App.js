import React from 'react';
import logo from './assets/logo.svg';
import './style/App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';


const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      Our React Router 4 App
      <Link to={'/home/' + 4}>Home4</Link>
      <Link to={{pathname:'/home/',query:{'id': 1} }}>Home</Link>
      <Link to='/home/3'>Home3</Link>
      <NavLink to="/home" exact activeClassName="active">Home</NavLink>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/:number" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
          <PrimaryLayout />
        </BrowserRouter>
        <Header />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
