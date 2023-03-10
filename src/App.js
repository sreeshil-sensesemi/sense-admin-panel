import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';
import EnterprisePage from './pages/EnterprisePage';
import PatientPage from './pages/Patient/PatientPage';
import PatientDashboardPage from './pages/Patient/PatientDashboardPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<LandingPage/>} />
      <Route path='/admin-panel' element = {<AdminPanel/>} />
      <Route path='/clients' element = {<EnterprisePage/>} />
      <Route path='/patients' element = {<PatientPage/>} />
      <Route path='/patients/id' element = {<PatientDashboardPage/>} />
    </Routes>
    </BrowserRouter>

    </>
    
    
    
    
    
    
    // <div className="App">
    //   <landingPage/>
    // </div>
  );
}

export default App;
