import Home from './pages/Home';
import Foryou from './pages/Foryou';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoutes from './PrivateRoutes';
function App() {
  return (
    <>
    <AuthProvider> 
    <BrowserRouter>
    <Navbar />
 <Routes>
  <Route path = '/' element={<Home />} />
  <Route element={<PrivateRoutes/>}>
  <Route exact path='/for-you'element={<Foryou />} />
  </Route>
  </Routes>
  </BrowserRouter>
  </AuthProvider>
</>
   
  );
}

export default App;
