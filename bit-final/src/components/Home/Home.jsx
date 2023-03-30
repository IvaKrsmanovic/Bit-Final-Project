import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../service/service";

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
        <tr>
          <td>
            <span>{candidate.name}</span>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <tbody>{setCandidatesUI()}</tbody>
      </table>
    </div>
  );
};

export default Home;
