import logo from './logo.svg';
import './App.css';
import  Stopwatch from './component/stopwatch/stopwatch';
import {LoginPage} from './component/Login/loginpage';
import {Dash} from './component/dashboard/dashboard';
import { Navs } from './component/nav/nav';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<Navs/>,<Stopwatch/>]}/>
    <Route path='/login' element={[<Navs/>,<LoginPage/>]}/>
    <Route path='/Dashboard' element={[<Navs/>,<Dash/>]}/>


    </Routes>


    </BrowserRouter>
    </>
  )
 
}

export default App;
