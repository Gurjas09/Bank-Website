import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from  './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import './index.css';
import Sign from './pages/Sign';
import Fpass from './pages/Fpass';
import TandC from './pages/TandC';
import Account from './pages/Account';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/sign_in' element={<Sign/>}/>
        <Route path='/forgot_pass'element={<Fpass/>}/>
        <Route path="/home"element={<Home/>}/>
        <Route path="/TandC"element={<TandC/>}/>
        <Route path="/account" element={<Account/>} />
        <Route path="/forgot_pass" element={<Fpass/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
