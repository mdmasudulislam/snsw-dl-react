import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import './App.css';
import Register from './views/Register';
import Ticket from './views/tickets';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
    </div>
=======
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='/tickets' element={<Ticket.Layout />} >
                  <Route path="" element={<Ticket.List />}/>
                  <Route path="create" element={<Ticket.Create />}/>
              </Route>
            </Route>
        </Routes>      
    </BrowserRouter>
>>>>>>> f8a8a738f0d9ea4790a10a18c8c7a266d4da7b2a
  );
}

export default App;
