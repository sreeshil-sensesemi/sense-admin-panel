import React from 'react'
import Table from 'react-bootstrap/Table';


function PatientTable() {
    return (
        <>
                <div style={{ backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', padding: '20px', borderRadius: '8px' }}>
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
                            <tr>
                                <td>1</td>
                                <td>123456789012345678</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                {/* <td colSpan={2}>Larry the Bird</td> */}
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@jhf</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        </>
    )
}

export default PatientTable