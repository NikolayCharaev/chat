import Register from '@/components/pages/Register';
import Auth from '@/components/pages/Auth';

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from './components/pages/Home';

function App() {
  return (
    <div className="app bg-gradient text-white">
      <div className="flex justify-center items-center h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<Home />} />
             {/* <Route path="/chat/register" element={<Register />} /> */}
            {/* <Route path="/chat/auth" element={<Auth />} />  */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
