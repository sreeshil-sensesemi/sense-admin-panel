import React from 'react'
import Sidebar from '../../layouts/Sidebar/Sidebar'

function PatientDashboardPage() {
    return (
        <>
            <Sidebar>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', padding: '100px 0px 30px 0px' }}>
                    <div style={{ width: '85%', height: '400px', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', borderRadius: '8px' }}>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default PatientDashboardPage