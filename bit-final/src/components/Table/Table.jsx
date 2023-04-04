import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { BsEye } from "react-icons/bs";
import styles from './Table.module.css';
import { useParams } from 'react-router-dom';
import { getData } from '../../service/service';



function ReportsTable() {
  let {id}= useParams();

    const [data, setData] = useState([]);
  
    const initData = async () => {
      const dataResult = await getData("reports?candidateId=" + id);
      if (dataResult != null && dataResult.length > 0) {
        setData(dataResult);
      }
    };
  
    useEffect(() => {
      initData();
    }, []);


  return (
    <Container fluid={true}>
      <h2 className={styles.heading}>Reports</h2>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th colSpan={2}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report) => (
            <tr key={report.id}>
              <td>{report.companyName}</td>
              <td>{new Date(report.interviewDate).toLocaleDateString()}</td>
              <td>{report.status}</td>
              <td><BsEye/></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>   
  );
}

export default ReportsTable;
