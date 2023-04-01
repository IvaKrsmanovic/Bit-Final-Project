import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../service/service";
import { CardComponent } from "./CardComponent";
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
        <CardComponent
          key={candidate.id}
          id={candidate.id}
          name={candidate.name}
          avatar={candidate.avatar}
          email={candidate.email}
          birthday={candidate.birthday}
          education={candidate.education}
        ></CardComponent>
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
