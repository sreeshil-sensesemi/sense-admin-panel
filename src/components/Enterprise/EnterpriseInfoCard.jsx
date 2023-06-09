import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


function EnterpriseInfoCard() {

    const { data } = useSelector((state) => state.allEnterprises)

    const params = useParams();
    const enterpriseid = params.id;

    let enterprise;
    if (data.Data instanceof Array && data.Data.length > 0) {
        enterprise = data.Data.find(item => enterpriseid == item.SenseHospitalID)
    }


    return (
        
            <div style={{padding: '60px', width: '70%', height: '280px', backgroundColor: '', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div className='logo_box' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', position: 'absolute', top: 180, left: '47%', width: '80px', height: '80px', borderRadius: '50%' }}><img src={enterprise.Logo} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%' }} /></div>
                <div style={{ backgroundColor: '', width: '300px', height: '200px', margin: 'auto', display:'flex',flexDirection: 'column', justifyContent: 'center', paddingTop: '20px' }}>
                    <h2 style={{marginBottom: '20px'}}>{enterprise ? enterprise.HospitalName : ''} - {enterprise ? enterprise.SenseHospitalID: ''}</h2>
                    <h6>Mobile Number: {enterprise ? enterprise.MobileNumber: ''}</h6>
                    {enterprise && enterprise.Email && <h6>Email: {enterprise.Email}</h6>}
                    {enterprise && enterprise.City && <h6>City: {enterprise.City}</h6>}
                    {enterprise && enterprise.State && <h6>State: {enterprise.State}</h6>}
                    <h6>Address: {enterprise ? enterprise.Address: ''}</h6>
                </div>
            </div>
      
    )
}

export default EnterpriseInfoCard