import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import DeviceVitalTable from './DeviceVitalTable';

function PatientInfoPage() {

    const navigate = useNavigate();
    const params = useParams();

    const { data } = useSelector((state) => state.allPatients)

    let userDetails;
    if (data.Data instanceof Array && data.Data.length > 0) {
        userDetails = data.Data.find(item => params.id == item.SensePatientID)
    }
    const patientid = params.id;

    const handleDeviceVitals = () => {
        navigate(`/patients/sense-vitals/${patientid}`)
    }

    const handleOtherVitals = () => {

    }

    return (
        <>
            <Sidebar>
                <div style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gap: '10px', padding: '10px 0px 20px 0px' }}>
                    <button onClick={handleDeviceVitals} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: '#00A8CA', outline: 'none', border: 'none' }}>SenseH Vitals</button>
                    <button onClick={handleOtherVitals} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: '#00A8CA', outline: 'none', border: 'none' }}>Other Vitals</button>
                    <div className='top_section' style={{ width: '85%', height: '250px', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', borderRadius: '8px' }}>
                    </div>




                    {/* 
                    <div className='content_section' style={{ width: '85%', height: '300px', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', borderRadius: '8px' }}>
                    
                    </div> */}
                </div>
            </Sidebar>
        </>
    )
}

export default PatientInfoPage