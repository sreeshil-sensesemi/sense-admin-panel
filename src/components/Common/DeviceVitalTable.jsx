import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaFileDownload } from "react-icons/fa";
import Papa from 'papaparse';
import toast from 'react-hot-toast';

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
                <td>{item.Time}</td>
                {renderDynamicColumns(item)}
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
                        <td><button onClick={() => handleDownload(item, context)} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>
                    </>
                )
            case 'SPO2':
                return (
                    <>
                        <td>{item.calculatedData}</td>
                        <td>{truncateValues(item.PPGRED_RawData, 3)}</td>
                        <td>{truncateValues(item.PPGIR_RawData, 3)}</td>
                        <td><button onClick={() => handleDownload(item, context)} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>
                    </>
                );
            case 'ECG1':
                return (
                    <>
                        <td>{truncateValues(item.RawData, 4)}</td>
                        <td><button onClick={() => handleDownload(item, context)} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>
                    </>
                )
            case 'ECG6':
                return (
                    <>
                        <td>{truncateValues(item.Lead_1_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_2_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_3_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_4_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_5_RawData, 3)}</td>
                        <td>{truncateValues(item.Lead_6_RawData, 3)}</td>
                        <td><button onClick={() => handleDownload(item, context)} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>
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
                        <td><button onClick={() => handleDownload(item, context)} style={{ color: 'white', padding: '2px 12px', borderRadius: '8px', backgroundColor: 'green', outline: 'none', border: 'none' }}><FaFileDownload /></button></td>
                    </>
                );
            default:
                return null;
        }
    };


    // Function to truncate the values and add ellipsis
    const truncateValues = (values, maxLength) => {

        if (values instanceof Array) {

            if (values.length <= maxLength) {
                return values.join(', ');
            } else {
                const truncatedValues = values.slice(0, maxLength);
                return truncatedValues.join(', ') + ' ...';
            }
        }
    };

    //data export to csv file
    const handleDownload = (vitalData, context) => {

        if (vitalData instanceof Object) {
            const csvData = [];
            let maxRows;
            switch (context) {
                case 'BP':
                    maxRows = Math.max(vitalData.BP_PPG_RED_RawData.length, vitalData.BP_ECG_L1_RawData.length)
                    break;
                case 'SPO2':
                    maxRows = Math.max(vitalData.PPGRED_RawData.length, vitalData.PPGIR_RawData.length)
                    break;
                case 'ECG1':
                    maxRows = Math.max(vitalData.RawData.length)
                    break;
                case 'ECG6':
                    maxRows = Math.max(vitalData.Lead_1_RawData.length, vitalData.Lead_2_RawData.length, vitalData.Lead_3_RawData.length, vitalData.Lead_4_RawData.length, vitalData.Lead_5_RawData.length, vitalData.Lead_6_RawData.length)
                    break;
                case 'ECG12':
                    maxRows = Math.max(vitalData.Lead_1_RawData.length, vitalData.Lead_2_RawData.length, vitalData.Lead_3_RawData.length, vitalData.Lead_4_RawData.length, vitalData.Lead_5_RawData.length, vitalData.Lead_6_RawData.length, vitalData.Lead_7_RawData.length, vitalData.Lead_8_RawData.length, vitalData.Lead_9_RawData.length, vitalData.Lead_10_RawData.length, vitalData.Lead_11_RawData.length, vitalData.Lead_12_RawData.length)
                    break;

                default:
                    maxRows = [];
                    break;
            }

            for (let i = 0; i < maxRows; i++) {
                switch (context) {
                    case 'BP':

                        const bprow = {
                            SensePatientID: i === 0 ? vitalData.SensePatientID : '',
                            DeviceID: i === 0 ? vitalData.DeviceID : '',
                            Date: i === 0 ? vitalData.Date : '',
                            Time: i === 0 ? vitalData.Time : '',
                            SystolicBP: i === 0 ? vitalData.SystolicBP : '',
                            DiastolicBP: i === 0 ? vitalData.DiastolicBP : '',
                            BP_PPG_RED_RawData: vitalData.BP_PPG_RED_RawData[i] !== undefined ? vitalData.BP_PPG_RED_RawData[i] : '',
                            BP_ECG_L1_RawData: vitalData.BP_ECG_L1_RawData[i] !== undefined ? vitalData.BP_ECG_L1_RawData[i] : ''
                        };
                        csvData.push(bprow);
                        break;
                    case 'SPO2':

                        const spo2row = {
                            SensePatientID: i === 0 ? vitalData.SensePatientID : '',
                            DeviceID: i === 0 ? vitalData.DeviceID : '',
                            Date: i === 0 ? vitalData.Date : '',
                            Time: i === 0 ? vitalData.Time : '',
                            calculatedData: i === 0 ? vitalData.calculatedData : '',
                            PPGRED_RawData: vitalData.PPGRED_RawData[i] !== undefined ? vitalData.PPGRED_RawData[i] : '',
                            PPGIR_RawData: vitalData.PPGIR_RawData[i] !== undefined ? vitalData.PPGIR_RawData[i] : ''
                        };
                        csvData.push(spo2row);
                        break;
                    case 'ECG1':

                        const ecg1row = {
                            SensePatientID: i === 0 ? vitalData.SensePatientID : '',
                            DeviceID: i === 0 ? vitalData.DeviceID : '',
                            Date: i === 0 ? vitalData.Date : '',
                            Time: i === 0 ? vitalData.Time : '',
                            RawData: vitalData.RawData[i] !== undefined ? vitalData.RawData[i] : '',
                        };
                        csvData.push(ecg1row);
                        break;
                    case 'ECG6':

                        const ecg6row = {
                            SensePatientID: i === 0 ? vitalData.SensePatientID : '',
                            DeviceID: i === 0 ? vitalData.DeviceID : '',
                            Date: i === 0 ? vitalData.Date : '',
                            Time: i === 0 ? vitalData.Time : '',
                            Lead_1_RawData: vitalData.Lead_1_RawData[i] !== undefined ? vitalData.Lead_1_RawData[i] : '',
                            Lead_2_RawData: vitalData.Lead_2_RawData[i] !== undefined ? vitalData.Lead_2_RawData[i] : '',
                            Lead_3_RawData: vitalData.Lead_3_RawData[i] !== undefined ? vitalData.Lead_3_RawData[i] : '',
                            Lead_4_RawData: vitalData.Lead_4_RawData[i] !== undefined ? vitalData.Lead_4_RawData[i] : '',
                            Lead_5_RawData: vitalData.Lead_5_RawData[i] !== undefined ? vitalData.Lead_5_RawData[i] : '',
                            Lead_6_RawData: vitalData.Lead_6_RawData[i] !== undefined ? vitalData.Lead_6_RawData[i] : '',
                        };
                        csvData.push(ecg6row);
                        break;
                    case 'ECG12':

                        const ecg12row = {
                            SensePatientID: i === 0 ? vitalData.SensePatientID : '',
                            DeviceID: i === 0 ? vitalData.DeviceID : '',
                            Date: i === 0 ? vitalData.Date : '',
                            Time: i === 0 ? vitalData.Time : '',
                            Lead_1_RawData: vitalData.Lead_1_RawData[i] !== undefined ? vitalData.Lead_1_RawData[i] : '',
                            Lead_2_RawData: vitalData.Lead_2_RawData[i] !== undefined ? vitalData.Lead_2_RawData[i] : '',
                            Lead_3_RawData: vitalData.Lead_3_RawData[i] !== undefined ? vitalData.Lead_3_RawData[i] : '',
                            Lead_4_RawData: vitalData.Lead_4_RawData[i] !== undefined ? vitalData.Lead_4_RawData[i] : '',
                            Lead_5_RawData: vitalData.Lead_5_RawData[i] !== undefined ? vitalData.Lead_5_RawData[i] : '',
                            Lead_6_RawData: vitalData.Lead_6_RawData[i] !== undefined ? vitalData.Lead_6_RawData[i] : '',
                            Lead_7_RawData: vitalData.Lead_7_RawData[i] !== undefined ? vitalData.Lead_7_RawData[i] : '',
                            Lead_8_RawData: vitalData.Lead_8_RawData[i] !== undefined ? vitalData.Lead_8_RawData[i] : '',
                            Lead_9_RawData: vitalData.Lead_9_RawData[i] !== undefined ? vitalData.Lead_9_RawData[i] : '',
                            Lead_10_RawData: vitalData.Lead_10_RawData[i] !== undefined ? vitalData.Lead_10_RawData[i] : '',
                            Lead_11_RawData: vitalData.Lead_11_RawData[i] !== undefined ? vitalData.Lead_11_RawData[i] : '',
                            Lead_12_RawData: vitalData.Lead_12_RawData[i] !== undefined ? vitalData.Lead_12_RawData[i] : '',
                        };
                        csvData.push(ecg12row);
                        break;
                    default:
                        break;
                }

            }

            const csv = Papa.unparse(csvData);

            const csvWithBOM = '\ufeff' + csv; // Add BOM character at the beginning

            const csvDataURI = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvWithBOM);
            const csvLink = document.createElement('a');
            csvLink.href = csvDataURI;
            const clientID = vitalData ? vitalData.SensePatientID.slice(0,5) : '000'
            csvLink.download = `${context}-${clientID}-${vitalData.Date}-${vitalData.Time}.csv`;
            csvLink.click();

        } else {
            toast.error('Download failed', {
                id: 'csvErr',
                duration: 2000
            })
        }
    }

    return (

        <div style={{ overflowX: 'auto', backgroundColor: 'white', boxShadow: 'rgb(0 0 0 / 16%) 1px 1px 10px', padding: '20px', borderRadius: '8px' }}>
            <Table striped size="sm" >
                <thead>{renderTableHeader()}</thead>
                <tbody>{renderTableRows(data)}</tbody>
            </Table>
        </div>

    )
}

export default DeviceVitalTable;