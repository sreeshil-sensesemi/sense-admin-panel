import React from 'react'
import PatientTable from '../../components/AdminPanel/Patient/PatientTable'
import PatientSearchBar from '../../components/AdminPanel/Patient/PatientSearchBar'
import Sidebar from '../../layouts/Sidebar/Sidebar'

function PatientPage() {
  return (
    <>
      <Sidebar>
        <div style={{ width: '100%', height: '100%', padding: '100px 0px 30px 0px' }}>
          <PatientSearchBar />
          <PatientTable />
        </div>
      </Sidebar>
    </>
  )
}

export default PatientPage