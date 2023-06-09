import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from '../features/WebUser/loginSlice'
import { allPatientsSlice } from '../features/Patients/AllPatientsSlice'
import { deviceVitalsSlice } from '../features/Patients/DeviceVitalsSlice'
import { allEnterprisesSlice } from '../features/Enterprise/AllEnterprisesSlice'

export const store = configureStore({
  reducer: {
    userLogin: loginSlice.reducer,
    allPatients: allPatientsSlice.reducer,
    deviceVitals: deviceVitalsSlice.reducer,
    allEnterprises: allEnterprisesSlice.reducer
  },
})