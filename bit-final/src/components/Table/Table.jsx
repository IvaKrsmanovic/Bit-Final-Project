import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { BsEye } from "react-icons/bs"

import styles from './Table.module.css';

function BasicExample() {
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
          <tr>
            <td>Google</td>
            <td>23.12.2022.</td>
            <td>Passed</td>
            <td><BsEye/></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>28.11.2022.</td>
            <td>Declined</td>
            <td><BsEye/></td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>25.11.2022.</td>
            <td>Passed</td>
            <td><BsEye/></td>
          </tr>
          <tr>
            <td>Instagram</td>
            <td>22.11.2022.</td>
            <td>Passed</td>
            <td><BsEye/></td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>23.09.2022.</td>
            <td>Declined</td>
            <td><BsEye/></td>
          </tr>
        </tbody>
      </Table>
    </Container>   
  );
}

export default BasicExample;