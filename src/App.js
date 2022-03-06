import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>   
        <Route path="/beers" element={<ListBeers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/beers/:beerId" element={<SingleBeer />}></Route>
      </Routes>
    </div>
  );
}

export default function App()