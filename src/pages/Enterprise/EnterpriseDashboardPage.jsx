import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import InfoBox from '../../components/Common/InfoBox';
import EnterpriseTable from '../../components/Enterprise/EnterpriseTable';
import { allEnterpriseData } from '../../features/Enterprise/AllEnterprisesSlice';
import {
  FaHospital
} from "react-icons/fa";





function EnterpriseDashboardPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('logged'));
    if (!userData) {
      navigate('/');
    }

    dispatch(allEnterpriseData());

  }, []);

  const { data } = useSelector((state) => state.allEnterprises)



  return (
    <>
      <Sidebar>
        <div style={{ width: '100%', height: '100%', padding: '30px 0px 30px 0px' }}>
          <InfoBox text={'Enterprises'} count={data && data.Data ? data.Data.length : 0} Icon={FaHospital} />
          <EnterpriseTable data={data ? data.Data : []}/>
        </div>
      </Sidebar>
    </>
  )
}

export default EnterpriseDashboardPage