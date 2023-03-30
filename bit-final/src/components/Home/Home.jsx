import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../service/service";
import Card from "react-bootstrap/Card";
import "./CandidateList.css";

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
        <Card className="card" key={candidate.id}>
          <Card.Img
            className="card-img"
            src={candidate.avatar}
            alt={candidate.avatar}
          />

          <Card.Body className="d-flex flex-column">
            <Card.Title className="card-name">{candidate.name}</Card.Title>
            <Card.Text className="card-text">{candidate.email}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  };

  return (
    <div>
      <div className="title-search border-bottom p-2">
        <div className="col-4">
          <h2>Candidates</h2>
        </div>
        <div className="col-4">
          <div className="input-box">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
 
      <div className="container">
        <div className="list">{setCandidatesUI()}</div>
      </div>
    </div>
  );
};

export default Home;
