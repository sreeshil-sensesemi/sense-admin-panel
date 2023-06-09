import React, { useState } from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";

function PatientInfoPage() {

    const navigate = useNavigate();
    const params = useParams();
    const [more, setMore] = useState(false);

    const { data } = useSelector((state) => state.allPatients)

    const patientid = params.id;
    let userDetails;
    if (data.Data instanceof Array && data.Data.length > 0) {
        userDetails = data.Data.find(item => patientid == item.SensePatientID)
    }

    const handleMore = () => setMore(!more);

    const handleDeviceVitals = () => {
        navigate(`/patients/sense-vitals/${patientid}`)
    }

    const handleOtherVitals = () => {

    }

    return (
        <>
            <Sidebar>
                <div style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', gap: '10px', padding: '10px 0px 20px 0px' }}>
                    <div className='top_section' style={{ display: 'flex', flexDirection: 'column', width: '45%', height: more ? '500px' : '350px', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', borderRadius: '8px' }}>
                        <div style={{ backgroundColor: '', display: 'flex' }}>
                            <div style={{ backgroundColor: '', width: '70%' }}>
                                <h4>Patient ID:{userDetails ? userDetails.SensePatientID : ''}</h4>
                            </div>
                            <div style={{ backgroundColor: '', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <button onClick={handleDeviceVitals} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: '#00A8CA', outline: 'none', border: 'none' }}>SenseH Vitals</button>
                                <button onClick={handleOtherVitals} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: '#00A8CA', outline: 'none', border: 'none' }}>Other Vitals</button>
                            </div>
                        </div>
                        <hr style={{ width: '100%', color: '#00A8CA' }} />

                        <div>
                            <div>
                                <h6 style={{ marginTop: '10px' }}>Name: {userDetails ? userDetails.Name : ''}</h6>
                                <h6>Age: {userDetails ? userDetails.Age : ''}</h6>
                                <h6>Gender: {userDetails ? userDetails.Gender : ''}</h6>
                                <h6>Mobile Number: {userDetails ? userDetails.MobileNumber : ''}</h6>
                                <h6>City: {userDetails ? userDetails.City : ''}</h6>
                            </div>
                            {!more ?
                                <FaPlus size={20} style={{ marginLeft: '190px', cursor: 'pointer' }} onClick={handleMore} />
                                :
                                <FaMinus size={20} style={{ marginLeft: '190px', cursor: 'pointer' }} onClick={handleMore} />
                            }
                            {more &&
                                <div>
                                    <h6>Smoking: {userDetails && userDetails.Smoking == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>Alcohol: {userDetails && userDetails.Alcohol == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>Diabetes: {userDetails && userDetails.Diabetes == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>ChronicKidneyDisease: {userDetails && userDetails.ChronicKidneyDisease == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>Epilepsy: {userDetails && userDetails.Epilepsy == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>Cardiac: {userDetails && userDetails.Cardiac == 'true' ? 'Yes' : 'No'}</h6>
                                    <h6>Cancer: {userDetails && userDetails.Cancer == 'true' ? 'Yes' : 'No'}</h6>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default PatientInfoPage