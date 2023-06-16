import React, { useEffect, useState } from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import DeviceVitalTable from '../../components/Common/DeviceVitalTable';
import { useSelector, useDispatch } from 'react-redux';
import { deviceVitalData, reset } from '../../features/Patients/DeviceVitalsSlice';
import { useParams } from 'react-router-dom';
// import toast from 'react-hot-toast';

function DeviceVitalPage() {

    const dispatch = useDispatch();
    const params = useParams();

    const id = params.id;

    const [vital, setVital] = useState({
        BP: true,
        SPO2: false,
        ECG1: false,
        ECG6: false,
        ECG12: false
    })

    useEffect(() => {
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'BP' }))
    }, [])

    const handleFetch = (context) => {

        const newState = {
            BP: false,
            SPO2: false,
            ECG1: false,
            ECG6: false,
            ECG12: false
        }

        newState[context] = true;
        setVital(newState);

        dispatch(reset())
        dispatch(deviceVitalData({ id, context }))
    }


    const { data } = useSelector((state) => state.deviceVitals)

    // if (data.Status == 'failure') {
    //     toast.error(data.Message, {
    //         id: 'NoVitalDataErr',
    //         // duration: 200
    //     })
    // }



    return (
        <>
            <Sidebar>
                <div className='d_container' style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    <div className='card_container' style={{ display: 'flex', gap: '30px', width: 'full', marginTop: '80px', paddingLeft: '80px', backgroundColor: '' }}>
                        <div className='bp_card' onClick={() => handleFetch('BP')} style={{ backgroundColor: vital.BP ? '#00A8CA' : 'white', color: vital.BP ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>BP</div>
                        <div className='spo2_card' onClick={() => handleFetch('SPO2')} style={{ backgroundColor: vital.SPO2 ? '#00A8CA' : 'white', color: vital.SPO2 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>SPO2</div>
                        <div className='ecg1_card' onClick={() => handleFetch('ECG1')} style={{ backgroundColor: vital.ECG1 ? '#00A8CA' : 'white', color: vital.ECG1 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 1</div>
                        <div className='ecg6_card' onClick={() => handleFetch('ECG6')} style={{ backgroundColor: vital.ECG6 ? '#00A8CA' : 'white', color: vital.ECG6 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 6</div>
                        <div className='ecg12_card' onClick={() => handleFetch('ECG12')} style={{ backgroundColor: vital.ECG12 ? '#00A8CA' : 'white', color: vital.ECG12 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 12</div>
                    </div>
                    {data && data.Status == 'success' ?
                        data && data.Data && <DeviceVitalTable data={data.Data} context={vital.BP ? 'BP' : (vital.SPO2 ? 'SPO2' : (vital.ECG1 ? 'ECG1' : (vital.ECG6 ? 'ECG6' : (vital.ECG12 ? 'ECG12' : ''))))} />
                        :
                        <p>No Data</p>
                    }

                    {/* {data && data.Data && <DeviceVitalTable data={data.Data} context={vital.BP ? 'BP' : (vital.SPO2 ? 'SPO2' : (vital.ECG1 ? 'ECG1' : (vital.ECG6 ? 'ECG6' : (vital.ECG12 ? 'ECG12' : ''))))} />} */}
                </div>
            </Sidebar>
        </>
    )
}

export default DeviceVitalPage;