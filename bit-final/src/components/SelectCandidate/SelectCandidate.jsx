// DRUGI DEO
// import { useEffect } from "react";
// import { useState } from "react";
// import { getData } from "./service/service";
// import Card from "react-bootstrap/Card";

// const SelectCandidate = () => {
//   const [data, setData] = useState([]);

//   const initData = async () => {
//     const dataResult = await getData("candidates");
//     if (dataResult != null && dataResult.length > 0) {
//       setData(dataResult);
//     }
//   };

//   useEffect(() => {
//     initData();
//   }, []);

//   const handlerSelectCandidate = (event, key) => {
//     console.log(event.target)
//     console.log(key.current.value)
//   }

//   const SetSelectCandidateUI = () => {
//     return data.map((candidate) => {
//       return (
//         <Card onClick={handlerSelectCandidate()} style={{ cursor: "pointer" }} key={candidate.id}>
//           <Card.Img variant="top" src={'candidate.avatar'} />
//           <Card.Body>
//             <Card.Title>{candidate.name}</Card.Title>
//             <Card.Subtitle>{candidate.email}</Card.Subtitle>
//           </Card.Body>
//         </Card>
//       );
//     });
//   };

//   return (
//     <div className="container">
//         {SetSelectCandidateUI()}
//     </div>
//   );
// };

// export default SelectCandidate;
