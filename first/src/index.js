import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theImage from './verizon.jfif';
import {BrowserRouter,Link,Route} from 'react-router-dom';
 
  import Aggrid from './aggrid';
  import Mapping from './main';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import { AgGridReact } from '@ag-grid-community/react';

function Verizon()
{
  return (
    <div>
      <nav className="navbar abc1">
        <a href="#" className="navbarbrand abc2">
          <img src={theImage} width="140" height="55"></img>
          </a>
          <p className="abc3">beta v1.0</p>
          <div className="navbarnav abc4">
            <b>Social Media POC</b></div>
            </nav>
            <hr/>
            <ul>
          <li><Link to="/mapping">Map</Link></li>
          <li><Link to="/aggrid">Ag-grid</Link></li>
        </ul>
        <Route path="/mapping" component={Mapping}></Route>
        <Route path="/aggrid" component={Aggrid}></Route>
    </div>
  )
}
ReactDOM.render(<BrowserRouter><Verizon></Verizon></BrowserRouter>,document.getElementById("root"));


