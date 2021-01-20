import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      {/* When everything is finished, delete this commented line below */}
      {/* <HeroSection /> */}
    </Router>
  );
}

export default App;
