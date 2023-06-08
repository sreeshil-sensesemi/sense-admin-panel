import React from 'react'
import Table from 'react-bootstrap/Table';
import { CSVLink } from 'react-csv';
import { FaFileDownload } from "react-icons/fa";


function DeviceVitalTable({ data, context }) {

    //render the table column with respect to context
    const renderTableHeader = () => {
        let headerColumns = [];

        switch (context) {
            case 'BP':
                headerColumns = ['SensePatientID', 'DeviceID', 'Date', 'Time', 'SystolicBP', 'DiastolicBP', 'BP_PPG_RED_RawData', 'BP_ECG_L1_RawData', 'Download'];
                break;
            case 'SPO2':
                headerColumns = ['SensePatientID', 'DeviceID', 'Date', 'Time', 'calculatedData', 'PPGRED_RawData', 'PPGIR_RawData', 'Download'];
                break;
            case 'ECG1':
                headerColumns = ['SensePatientID', 'DeviceID', 'Date', 'Time', 'RawData', 'Download'];
                break;
            case 'ECG6':
                headerColumns = ['SensePatientID', 'DeviceID', 'Date', 'Time', 'Lead_1_RawData', 'Lead_2_RawData', 'Lead_3_RawData', 'Lead_4_RawData', 'Lead_5_RawData', 'Lead_6_RawData', 'Download'];
                break;
            case 'ECG12':
                headerColumns = ['SensePatientID', 'DeviceID', 'Date', 'Time', 'Lead_1_RawData', 'Lead_2_RawData', 'Lead_3_RawData', 'Lead_4_RawData', 'Lead_5_RawData', 'Lead_6_RawData', 'Lead_7_RawData', 'Lead_8_RawData', 'Lead_9_RawData', 'Lead_10_RawData', 'Lead_11_RawData', 'Lead_12_RawData', 'Download'];
                break;
            default:
                headerColumns = [];
                break;
        }

        return (
            <tr>
                {headerColumns.map((column) => (
                    <th key={column}>{column}</th>
                ))}
            </tr>
        );
    };

    //render the table rows
    const renderTableRows = (data) => {
        return data.map((item, index) => (
            <tr key={index}>
                <td>{item.SensePatientID}</td>
                <td>{item.DeviceID}</td>
                <td>{item.Date}</td>
                <td>{item.Date}</td>
                {renderDynamicColumns(item)}
                <td><button style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>

            </tr>
        ));
    };

    const renderDynamicColumns = item => {
        switch (context) {
            case 'BP':
                return (
                    <>
                        <td>{item.SystolicBP}</td>
                        <td>{item.DiastolicBP}</td>
                        <td>{truncateValues(item.BP_PPG_RED_RawData, 3)}</td>
                        <td>{truncateValues(item.BP_ECG_L1_RawData, 3)}</td>
                    </>
                )
            case 'SPO2':
                return (
                    <>
                        <td>{item.calculatedData}</td>
                        <td>{truncateValues(item.PPGRED_RawData, 3)}</td>
                        <td>{truncateValues(item.PPGIR_RawData, 3)}</td>
                    </>
                );
            case 'ECG1':
                return <td>{truncateValues(item.RawData, 4)}</td>
            case 'ECG6':
                return (
                    <>
                        <td>{truncateValues(item.Lead_1_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_2_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_3_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_4_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_5_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_6_RawData, 3)}</td>
                    </>
                );
            case 'ECG12':
                return (
                    <>
                        <td>{truncateValues(item.Lead_1_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_2_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_3_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_4_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_5_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_6_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_7_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_8_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_9_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_10_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_11_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_12_RawData, 3)}</td>
                    </>
                );
            default:
                return null;
        }
    };


    // Function to truncate the values and add ellipsis
    const truncateValues = (values, maxLength) => {
        if (values.length <= maxLength) {
            return values.join(', ');
        } else {
            const truncatedValues = values.slice(0, maxLength);
            return truncatedValues.join(', ') + ' ...';
        }
    };




    return (

        <div style={{ overflowX: 'auto', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', padding: '20px', borderRadius: '8px' }}>
            {/* <Table striped size="sm" >
                <thead>
                    <tr>
                        <th>SensePatient ID</th>
                        <th>Device ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Systolic BP</th>
                        <th>Diastolic BP</th>
                        <th>BP-PPG-RED</th>
                        <th>BP-ECG-L1</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ cursor: 'pointer' }}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}>CSV</button></td>
                        <td><CSVLink {...csvReport}>CSV</CSVLink></td>
                    </tr>
                </tbody>
            </Table> */}

            <Table striped size="sm" >
                <thead>{renderTableHeader()}</thead>
                <tbody>{renderTableRows(data)}</tbody>
            </Table>
        </div>

    )
}

export default DeviceVitalTable;