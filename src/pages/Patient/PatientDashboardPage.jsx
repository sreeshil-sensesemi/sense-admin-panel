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
import { useSelector, useDispatch } from 'react-redux';
import { allPatientsData } from '../../features/Patients/AllPatientsSlice'

function PatientDashboardPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  
    const {data} = useSelector((state) => state.allPatients)
  
  
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('logged'));
        if (!userData) {
            navigate('/');
        }
  
        dispatch(allPatientsData())
  
    }, []);
  
    return (
      <>
        <Sidebar>
        <div style={{width:'100%', height: '100%', padding: '30px 0px 30px 0px'}}>
          <EnterpriseInfoBox text={'Patients'} count={data && data.Data ? data.Data.length: 0} Icon={FaHospitalUser} />
            {/* <SearchBar placeholder={'Patient ID'} /> */}
            {/* {data &&  <PatientTable data={data.Data} />} */}
            <PatientTable data={data ? data.Data : []}/>
          </div>
        </Sidebar>
      </>
    )
}

export default PatientDashboardPage;


