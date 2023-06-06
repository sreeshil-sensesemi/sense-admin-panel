import React, { useEffect } from 'react'
import PatientTable from '../../components/AdminPanel/Patient/PatientTable'
import SearchBar from '../../components/Common/SearchBar'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EnterpriseInfoBox from '../../components/Common/InfoBox'
import {
  FaBars,
  FaUserAlt,
  FaUserMd,
  FaHospital,
  FaHospitalUser
} from "react-icons/fa";
import {useNavigate } from 'react-router-dom'


function PatientPage() {

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
      <div style={{width:'100%', height: '100%', padding: '30px 0px 30px 0px'}}>
        <EnterpriseInfoBox text={'Patients'} count={20} Icon={FaHospitalUser} />
          <SearchBar placeholder={'Patient ID'} />
          <PatientTable />
        </div>
      </Sidebar>
    </>
  )
}

export default PatientPage