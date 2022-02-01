import './App.css';
import {Route} from "react-router-dom";
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Pay from './components/Pay';
import Successful from './components/Successful';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Pay} />
        <Route path="/success" exact component={Successful}/>
      </Switch>
    </Router>
  );
}

export default App;
