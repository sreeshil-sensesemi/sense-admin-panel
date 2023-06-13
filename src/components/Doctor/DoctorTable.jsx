import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import SearchBar from '../Common/SearchBar';
import { useNavigate } from 'react-router-dom'

function DoctorTable({data}) {


    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    // Function to handle the search value change
    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    };

    let result = data;

    if (searchValue.length > 0) {
        result = filterData(searchValue);

        function filterData(query) {
            const filteredData = data.filter(item => item.SenseDoctorID.startsWith(query));
            return filteredData;
        }

    }

    const handleDoctorDetails = (id) => navigate(`/doctors/${id}`)

    return (
        <>
            <SearchBar placeholder={'Doctor ID'} onSearchValueChange={handleSearchValueChange} />
            <div style={{ backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', padding: '20px', borderRadius: '8px' }}>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Doctor ID</th>
                            <th>Name</th>
                            <th>Prof</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result && result.length != 0 ?
                            result.map((item, index) => {
                                return (
                                    <tr key={index} onClick={() => handleDoctorDetails(item.SenseDoctorID)} style={{ cursor: 'pointer' }}>
                                        <td>{index + 1}</td>
                                        <td>{item.SenseDoctorID}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Name}</td>
                                    </tr>
                                )
                            })
                            :
                            <p>Doctors Not Found</p>
                        }
                    </tbody>
                </Table>
            </div>
        </>

    )
}

export default DoctorTable