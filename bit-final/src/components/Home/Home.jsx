import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../service/service";
import Card from "react-bootstrap/Card";
import homeStyles from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState([]);

  const initData = async () => {
    const dataResult = await getData("candidates");
    if (dataResult != null && dataResult.length > 0) {
      setData(dataResult);
    }
  };

  useEffect(() => {
    initData();
  }, []);

  const setCandidatesUI = () => {
    return data.map((candidate) => {
      return (
        <Card className={homeStyles.card} key={candidate.id}>
          <Card.Img
            className={homeStyles.cardImg}
            src={candidate.avatar}
            alt={candidate.avatar}
          />

          <Card.Body className="d-flex flex-column">
            <Card.Title className={homeStyles.cardName}>{candidate.name}</Card.Title>
            <Card.Text className={homeStyles.cardText}>{candidate.email}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div className="pb-5">
      <div className={homeStyles.titleSearch}>
        <div className="col-4">
          <h2>Candidates</h2>
        </div>
        <div className="col-4">
          <div className="inputBox">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
 
      <div className={homeStyles.container}>
        <div className={homeStyles.list}>{setCandidatesUI()}</div>
      </div>
    </div>
  );
};

export default Home;
