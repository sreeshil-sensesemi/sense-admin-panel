import React, { useEffect } from 'react'
import EnterpriseTable from '../components/Enterprise/EnterpriseTable'
import EnterpriseInfoBox from '../components/Common/InfoBox'
import SearchBar from '../components/Common/SearchBar';
import Sidebar from '../layouts/Sidebar/Sidebar'
import {
    FaHospital
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

function EnterprisePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('logged'));
        if (!userData) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Sidebar>
                <div style={{ width: '100%', height: '100%', padding: '30px 0px 30px 0px' }}>
                    <EnterpriseInfoBox text={'Enterprises'} count={10} Icon={FaHospital} />
                    <SearchBar placeholder={'Enterprise ID'} />
                    <EnterpriseTable />
                </div>
            </Sidebar>
        </>
    )
}

export default EnterprisePage