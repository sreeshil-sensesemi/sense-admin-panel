import React, { useEffect, useState } from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import DeviceVitalTable from './DeviceVitalTable'
import { useSelector, useDispatch } from 'react-redux';
import { deviceVitalData,reset } from '../../features/Patients/DeviceVitalsSlice';
import { useParams } from 'react-router-dom';

function DeviceVitalPage() {

    const dispatch = useDispatch();
    const params = useParams();

    const id = params.id;

    const [bp, setBP] = useState(true);
    const [spo2, setSpo2] = useState(false);
    const [ecg1, setEcg1] = useState(false);
    const [ecg6, setEcg6] = useState(false);
    const [ecg12, setEcg12] = useState(false);

    const { data } = useSelector((state) => state.deviceVitals)

    useEffect(() => {
        dispatch(deviceVitalData({ id, context: 'BP' }))
    }, [])



    const handleBP = () => {
        setBP(true)
        setSpo2(false);
        setEcg1(false)
        setEcg6(false)
        setEcg12(false)
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'BP' }))

    }
    const handleSpo2 = () => {
        setSpo2(true);
        setBP(false)
        setEcg1(false)
        setEcg6(false)
        setEcg12(false)
        dispatch(reset)
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'SPO2' }))
    }
    const handleEcg1 = () => {
        setEcg1(true)
        setSpo2(false);
        setBP(false)
        setEcg6(false)
        setEcg12(false)
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'ECG1' }))
    }
    const handleEcg6 = () => {
        setEcg6(true)
        setSpo2(false);
        setBP(false)
        setEcg1(false)
        setEcg12(false)
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'ECG6' }))
    }
    const handleEcg12 = () => {
        setEcg12(true)
        setSpo2(false);
        setBP(false)
        setEcg1(false)
        setEcg6(false)
        dispatch(reset())
        dispatch(deviceVitalData({ id, context: 'ECG12' }))
    }

    return (
        <>
            <Sidebar>
                <div className='d_container' style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    <div className='card_container' style={{ display: 'flex', gap: '30px', width: 'full', marginTop: '80px', paddingLeft: '80px', backgroundColor: '' }}>
                        <div className='bp_card' onClick={handleBP} style={{ backgroundColor: bp ? '#00A8CA' : 'white', color: bp ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>BP</div>
                        <div className='spo2_card' onClick={handleSpo2} style={{ backgroundColor: spo2 ? '#00A8CA' : 'white', color: spo2 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>SPO2</div>
                        <div className='ecg1_card' onClick={handleEcg1} style={{ backgroundColor: ecg1 ? '#00A8CA' : 'white', color: ecg1 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 1</div>
                        <div className='ecg6_card' onClick={handleEcg6} style={{ backgroundColor: ecg6 ? '#00A8CA' : 'white', color: ecg6 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 6</div>
                        <div className='ecg12_card' onClick={handleEcg12} style={{ backgroundColor: ecg12 ? '#00A8CA' : 'white', color: ecg12 ? 'white' : '#00A8CA', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', cursor: 'pointer' }}>ECG 12</div>
                    </div>

                    {data && data.Data && <DeviceVitalTable data={data.Data} context={bp ? 'BP' : (spo2? 'SPO2': (ecg1? 'ECG1': (ecg6? 'ECG6': (ecg12?'ECG12': ''))))} /> }
                </div>
            </Sidebar>
        </>
    )
}

export default DeviceVitalPage