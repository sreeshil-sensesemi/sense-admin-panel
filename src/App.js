import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import AdminPanel from './pages/AdminPanel';
import EnterprisePage from './pages/EnterprisePage';
import DoctorPage from './pages/Doctor/DoctorPage'
import PatientDashboardPage from './pages/Patient/PatientDashboardPage';
import PatientInfoPage from './pages/Patient/PatientInfoPage';
import DeviceVitalPage from './pages/Patient/DeviceVitalPage';

function App() {
  return (
    <>

      <Toaster />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
        <Route path='/enterprises' element={<EnterprisePage />} />
        <Route path='/patients' element={<PatientDashboardPage />} />
        <Route path='/doctors' element={<DoctorPage />} />
      


        <Route path='/patients/:id' element={<PatientInfoPage />} />
        <Route path='/patients/sense-vitals/:id' element={<DeviceVitalPage />} />
      </Routes>

    </>






    // <div className="App">
    //   <landingPage/>
    // </div>
  );
}

export default App;
