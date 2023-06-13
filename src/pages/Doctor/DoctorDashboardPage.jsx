import React, { useEffect } from 'react'
import DoctorTable from '../../components/Doctor/DoctorTable';
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EnterpriseInfoBox from '../../components/Common/InfoBox'
import InfoBox from '../../components/Common/InfoBox';
import {
    FaUserMd
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { allDoctorsData } from '../../features/Doctor/AllDoctorsSlice';

function DoctorDashboardPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('logged'));
        if (!userData) {
            navigate('/');
        }

        dispatch(allDoctorsData());

    }, []);

    const { data } = useSelector((state) => state.allDoctors)

    return (
        <>
            <Sidebar>
                <div style={{ width: '100%', height: '100%', padding: '30px 0px 30px 0px' }}>
                    <InfoBox text={'Doctors'} count={data && data.Data ? data.Data.length : ''} Icon={FaUserMd} />
                    <DoctorTable data={data ? data.Data : []} />
                </div>
            </Sidebar>
        </>
    )
}

export default DoctorDashboardPage;