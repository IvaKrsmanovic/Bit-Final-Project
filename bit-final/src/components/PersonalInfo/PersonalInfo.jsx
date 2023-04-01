import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styles from './PersonalInfo.module.css';


function PersonalInfo() {
  return (
    <Container fluid={true} className={styles.marginTop}>
      <Row>
        <Col md={4}>
          <Image fluid={true} src="./avatarImg.jpg"/>
        </Col>
        <Col md={4}>
            <Row>
              <p className={styles.infoLabel}>Name:</p>
              <p className={styles.infoText}>Josefina Higgins</p>
            </Row>
            <Row>
              <p className={styles.infoLabel}>E-mail:</p>
              <p className={styles.infoText}>Dummy E-mail</p>
            </Row>
        </Col>
        <Col md={4}>
            <Row>   
              <p className={styles.infoLabel}>Date of Birth:</p>
              <p className={styles.infoText}>Dummy Date of Birth</p>
            </Row>
            <Row>
              <p className={styles.infoLabel}>Education:</p>
              <p className={styles.infoText}>Dummy Education</p>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PersonalInfo;