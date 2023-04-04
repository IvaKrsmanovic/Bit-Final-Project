import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from './PersonalInfo.module.css';


function PersonalInfo() {
  let { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const initData = async () => {
      const dataResult = await getData("candidates", [{ key: "id", value: id }]);
      if (dataResult != null && dataResult.length > 0) {
        setData(dataResult);
      }
    };

    initData();
  }, [id]);

  return (
    (data.map((candidate) =>
      <Container fluid={true} className={styles.marginTop} key={candidate.id}>
        <Row >
          <Col className={styles.imgContainer} md={4} sm={12}>
            <Image className={styles.avatar} fluid={true} src={candidate.avatar} />
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <p className={styles.infoLabel}>Name:</p>
              <p>{candidate.name}</p>
            </Row>
            <Row>
              <p className={styles.infoLabel}>E-mail:</p>
              <p>{candidate.email}</p>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <p className={styles.infoLabel}>Date of Birth:</p>
              <p>{dateHelper(candidate.birthday)}</p>
            </Row>
            <Row>
              <p className={styles.infoLabel}>Education:</p>
              <p>{candidate.education}</p>
            </Row>
          </Col>
        </Row>
      </Container>
    )));
}

export default PersonalInfo;