import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EnterpriseInfoCard from '../../components/Enterprise/EnterpriseInfoCard'
import InfoBox from '../../components/Common/InfoBox'
import {
    FaHospitalUser,
    FaUserMd
} from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EnterpriseInfoPage() {

    const params = useParams();
    const navigate = useNavigate();

    const enterpriseid = params.id;

    const { data } = useSelector((state) => state.allEnterprises)


    const handlePatients = () => {
        navigate(`/enterprises/patients/${enterpriseid}`);
    }


    return (
        <>
            <Sidebar>
                <div style={{ backgroundColor: '', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', width: '100%', height: '100%', gap: '8px', padding: '20px 0' }}>
                    <div style={{ display: 'flex', gap: '55px' }}>
                        <InfoBox text={'Doctors'} count={'10'} Icon={FaUserMd} />
                        <div onClick={handlePatients} style={{cursor: 'pointer'}}>
                            <InfoBox text={'Patients'} count={'30'} Icon={FaHospitalUser} />
                        </div>
                    </div>
                    <EnterpriseInfoCard  data = { data ? data : ''} />
                </div>
            </Sidebar>
        </>
    )
}

export default EnterpriseInfoPage