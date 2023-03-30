import Card from "react-bootstrap/Card";

import "./CardItem.css";

export const CardItem = ({ id, name, email, avatar }) => {
  return (
    <Card className="card">
   
     <Card.Img className="card-img" src={avatar} alt={avatar} />
    

      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-name">
          {name}
        </Card.Title>
        <Card.Text className="card-text">
           <h8>{email}</h8>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};