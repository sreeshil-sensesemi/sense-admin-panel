import React, { useEffect } from 'react'
import PatientTable from '../../components/Patient/PatientTable'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import InfoBox from '../../components/Common/InfoBox'
import {
  FaHospitalUser
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { allPatientsData } from '../../features/Patients/AllPatientsSlice'

function EntetprisePatientsPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //const { data } = useSelector((state) => state.allPatients)

let data = []
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('logged'));
    if (!userData) {
      navigate('/');
    }

    //dispatch(allPatientsData())

  }, []);

  return (
    <>
      <Sidebar>
        <div style={{ width: '100%', height: '100%', padding: '30px 0px 30px 0px' }}>
          <InfoBox text={'Patients'} count={data && data.Data ? data.Data.length : 0} Icon={FaHospitalUser} />
          <PatientTable data={data ? data.Data : []} />
        </div>
      </Sidebar>
    </>
  )
}

export default EntetprisePatientsPage;


