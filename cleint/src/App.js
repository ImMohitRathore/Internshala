import './App.css';
import Login from "./component/Login"
import Home from "./component/Home"
import Error_page from "./component/Erorr_page"
import Main from "./component/Main"
import { BrowserRouter , Switch , Route ,link } from 'react-router-dom';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
        <Route path= "/Login" exact component = {Login} />
        <Route path= "/" exact component = {Main} />
        <Route path= "/home" exact component = {Home} />
        <Route path= "/contact" exact component = {Contact} />
        <Route component={Error_page}/>
      </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
