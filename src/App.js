
function App() {
  return (
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
  );
}

export default App;
