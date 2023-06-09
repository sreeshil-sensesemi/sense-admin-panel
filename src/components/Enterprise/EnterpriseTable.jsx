import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
import SearchBar from '../Common/SearchBar';
import {
    FaHospital
} from "react-icons/fa";


function EnterpriseTable({ data }) {

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    };

    let result = data;

    if (searchValue.length > 0) {
        result = filterData(searchValue);

        function filterData(query) {
            const filteredData = data.filter(item => item.SenseHospitalID.startsWith(query));
            return filteredData;
        }
    }

    const handlePatientDetails = (id) => navigate(`/enterprises/${id}`);

    return (
        <>
            <SearchBar placeholder={'Enterprise ID'} onSearchValueChange={handleSearchValueChange} />
            <div style={{ backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px',margin:'auto', width: '900px', padding: '30px', borderRadius: '8px' }}>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Logo</th>
                            <th>Enterprise ID</th>
                            <th>Name</th>
                            {/* <th>Place</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {result && result.length != 0 ?
                            result.map((item, index) => {
                                return (
                                    <tr key={index} onClick={() => handlePatientDetails(item.SenseHospitalID)} style={{ cursor: 'pointer' }}>
                                        <td>{index + 1}</td>
                                        <td>{item.Logo == '' ? <FaHospital size={28} /> : <img src={item.Logo} alt="" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />}</td>
                                        <td>{item.SenseHospitalID}</td>
                                        <td>{item.HospitalName}</td>
                                    </tr>
                                )
                            })
                            :
                            <p>Enterprise Not Found</p>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default EnterpriseTable