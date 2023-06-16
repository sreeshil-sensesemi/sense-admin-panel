import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import SearchBar from '../Common/SearchBar';
import {useNavigate } from 'react-router-dom'

function PatientTable({ data }) {

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
            const filteredData = data.filter(item => item.SensePatientID.startsWith(query));
            return filteredData;
        }

    }

    const handlePatientDetails = (id) =>  navigate(`/patients/${id}`)

    return (
        <>
            <SearchBar placeholder={'Patient ID'} onSearchValueChange={handleSearchValueChange} />
            <div style={{border: '2px solid #00A8CA', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', padding: '20px', borderRadius: '8px' }}>
                <Table striped size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result && result.length != 0 ?
                            result.map((item, index) => {
                                return (
                                    <tr key={index} onClick={()=>handlePatientDetails(item.SensePatientID)} style={{cursor: 'pointer'}}>
                                        <td>{index + 1}</td>
                                        <td>{item.SensePatientID}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.City}</td>
                                    </tr>
                                )
                            }) 
                            :
                            <p>Patient Not Found</p>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default PatientTable