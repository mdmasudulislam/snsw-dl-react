import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './App.css';
import Register from './views/Register';
import Ticket from './views/tickets';

import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './App.css';
import Register from './views/Register';
import Ticket from './views/tickets';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {<Route path='/tickets' element={<Ticket.Layout />} >
                  <Route path="" element={<Ticket.List />}/>
                  <Route path="create" element={<Ticket.Create />}/>
              </Route> }
            </Route>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
