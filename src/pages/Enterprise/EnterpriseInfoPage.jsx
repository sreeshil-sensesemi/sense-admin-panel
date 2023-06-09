import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import EnterpriseInfoCard from '../../components/Enterprise/EnterpriseInfoCard'
import InfoBox from '../../components/Common/InfoBox'
import {
    FaHospitalUser,
    FaUserMd
} from "react-icons/fa";


function EnterpriseInfoPage() {
    return (
        <>
            <Sidebar>
                <div style={{ backgroundColor: '', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '', width: '100%', height: '100%', gap: '8px', padding: '20px 0' }}>
                    <div style={{display: 'flex', gap:'55px'}}>
                    <InfoBox text={'Doctors'} count={'10'} Icon={FaUserMd} />
                    <InfoBox text={'Patients'} count={'30'} Icon={FaHospitalUser} />
                    </div>
                    <EnterpriseInfoCard />
                </div>
            </Sidebar>
        </>
    )
}

export default EnterpriseInfoPage