import React, { useEffect } from 'react'
import InfoBox from '../components/Common/InfoBox';
import {
  FaHospital,
  FaHospitalUser,
  FaUserMd
} from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { totalCounts } from '../features/Admin/TotalCountsSlice';


function AdminDashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCounts());
  }, []);

  const { data } = useSelector((state) => state.totalCounts);
  

  return (
    <>
      <div style={{ width: '100%', height: '100px', display: 'flex', gap: '30px', paddingTop: '50px' }}>
        <InfoBox text={'Enterprises'} count={data && data.Data ? data.Data.enterprises: ''} Icon={FaHospital} />
        <InfoBox text={'Doctors'} count={data && data.Data ? data.Data.doctors: ''} Icon={FaUserMd} />
        <InfoBox text={'Patients'} count={data && data.Data ? data.Data.patients: ''} Icon={FaHospitalUser} />
      </div>
    </>
  )
}

export default AdminDashboard;