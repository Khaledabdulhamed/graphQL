import logo from './logo.svg';
import './App.css';
import { CharactersList } from './pages/Characters-List';
import {Route, Switch} from "react-router"
import { Character } from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route strict exact path="/" component ={CharactersList}/>
      <Route strict exact path="/search" component={Search}  />   
      <Route strict exact path="/:id" component ={Character}/>
      </Switch>
    </div>
  );
}

export default App;
