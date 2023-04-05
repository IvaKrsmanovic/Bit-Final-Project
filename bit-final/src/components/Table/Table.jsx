import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { BsEye } from "react-icons/bs";
import styles from "./Table.module.css";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../service/service";
import { dateHelper } from "../../service/dateHelper";

function ReportsTable() {
  let { id } = useParams();

  const [data, setData] = useState([]);

  const initData = async () => {
    const dataResult = await getData("reports", [
      { key: "candidateId", value: id },
    ]);
    if (dataResult != null && dataResult.length > 0) {
      setData(dataResult);
    }
  };

  useEffect(() => {
    initData();
  }, [id]);

  const [modalOpen, setModalOpen] = useState(false);
  const [reportSelected, setReportSelected] = useState();

  const handlerModal = (id) => {
    setModalOpen(true);
    setReportSelected(id);
  };

  return (
    <Container fluid={true}>
      <h2 className={styles.heading}>Reports</h2>
      <Table striped bordered hover>
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
              <td>{dateHelper(report.interviewDate)}</td>
              <td>{report.status}</td>
              <td>
                <BsEye
                  onClick={() => handlerModal(report.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        open={modalOpen}
        isOpen={setModalOpen}
        onClose={() => setModalOpen(false)}
        data={reportSelected}
      />
    </Container>
  );
}

export default ReportsTable;
