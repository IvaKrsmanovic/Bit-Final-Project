import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../service/service";
import { CardItem } from "../CardItem/CardItem";
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
        <>
        <div className="title-search">
        <div className="col-4"><h2>Candidates</h2></div>
       <div className="col-4"><div class="input-box">
        <input type="text" class="form-control"/>
        <i class="fa fa-search"></i>                    
        </div></div>
        
        </div>
        <hr style={{margin:"20px"}}></hr>
    <div className="container"> 
    
    <div className="list">   
    
    
        <CardItem key={candidate.id} name={candidate.name} email={candidate.email} avatar={candidate.avatar}  />
        </div> </div>
        </>
      );
    });
  };

  return (
  <>
    {setCandidatesUI()}
    </>
  );
};

export default Home;

