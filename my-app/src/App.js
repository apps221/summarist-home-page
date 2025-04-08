import Home from './pages/Home';
import Foryou from './pages/Foryou';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <>
    <AuthProvider> 
    <Navbar />
 <BrowserRouter>
 <Routes>
  <Route path = '/' element={<Home />} />
  <Route exact path='/for-you'element={<Foryou />} />
  </Routes>
  </BrowserRouter>
  </AuthProvider>
</>
   
  );
}

export default App;
