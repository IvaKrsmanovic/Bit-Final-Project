// create the table component and use it in the CandidateReportsPage.jsx It should show columns with 
// the following data: Company, Interview date and status.
// The status column should be divided in 2 columns, left one with the status such as Passed, Declined, and to the right the column with 
// the eye icon that when clicked is linked to the report overview. 
// The table should be scrollable and the height of the table should be 90% of the lower part.
// The page should be responsive and the layout should be changed according to the screen size.

import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import { BsEye } from "react-icons/bs";

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