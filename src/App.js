
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mround1 from './components/Modals/Mround1';
import Mround2 from './components/Modals/Mround2';
import Mround3 from './components/Modals/Mround3';
import Mround4 from './components/Modals/Mround4';
import Mround5 from './components/Modals/Mround5';
import Round1 from './components/Rounds/Round1';
import Round2 from './components/Rounds/Round2';
import Round3 from './components/Rounds/Round3';
import Round4 from './components/Rounds/Round4';
import Round5 from './components/Rounds/Round5';
import Advertise from './components/Advertise';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Advertise />} />
      <Route path="/round1" element={<Round1 />} />
      <Route path="/round2" element={<Round2 />} />
      <Route path="/round3" element={<Round3 />} />
      <Route path="/round4" element={<Round4 />} />
      <Route path="/round5" element={<Round5 />} />
      <Route path="/modals/mround1" element={<Mround1 />} />
      <Route path="/modals/mround2" element={<Mround2 />} />
      <Route path="/modals/mround3" element={<Mround3 />} />
      <Route path="/modals/mround4" element={<Mround4 />} />
      <Route path="/modals/mround5" element={<Mround5 />} />
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
