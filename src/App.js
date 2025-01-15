import './common/reset.css';
import './App.css';
import Header from './component/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './pages/Main';
import Practice from './pages/Practice';
import Food from './pages/Food';
import Trip from './pages/Trip';
import Resort from './pages/Resort';
// import Facilities from './pages/Facilities';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/practice" element={<Practice/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/trip" element={<Trip/>}/>
          <Route path="/resort" element={<Resort/>}/>
          {/* <Route path="/facilities" element={<Facilities/>}/> */}
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
