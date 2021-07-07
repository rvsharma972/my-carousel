import './App.css';
import Carousel from '../components/Carousel-Slider';
import Login from '../components/Login';
import Home from '../components/Home';
import Topbar from '../components/Topbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

function App() {
  return (
    <Router>
        <Topbar/>
        <Switch>
            <Route path={'/login'}>
                {<Login/>}
            </Route>
            <Route path={'/home'}>
                {<Home/>}
            </Route>
            <Route path={'/'}>
              <Carousel images={[img1,img2]}/> 
            </Route>
        </Switch>      
    </Router>
  );
}

export default App;
