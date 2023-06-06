import React, { useEffect } from 'react'
import PatientTable from '../../components/AdminPanel/Patient/PatientTable'
import SearchBar from '../../components/Common/SearchBar'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EnterpriseInfoBox from '../../components/Common/InfoBox'
import {
  FaUserMd
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function DoctorPage() {

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('logged'));
    if (!userData) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Sidebar>
        <div style={{ width: '100%', height: '100%', padding: '30px 0px 30px 0px' }}>
          <EnterpriseInfoBox text={'Doctors'} count={30} Icon={FaUserMd} />
          <SearchBar placeholder={'Doctor ID'} />
          <PatientTable />
        </div>
      </Sidebar>
    </>
  )
}

export default DoctorPage;