import Card from "react-bootstrap/Card";
import homeStyles from "./Home.module.css"
import { useNavigate } from "react-router-dom";
export const CardComponent =({id, avatar, name, email }) =>{
  
    const navigate = useNavigate();
const navigateToReports = () =>{
  navigate (`/candidates/${id}`)
}

    return (
        <Card className={homeStyles.card} key={id}>
          
          <Card.Img
            className={homeStyles.cardImg}
            src={avatar}
            alt={avatar} onClick={navigateToReports}
          />

          <Card.Body className="d-flex flex-column">
            <Card.Title className={homeStyles.cardName}>{name}</Card.Title>
            <Card.Text className={homeStyles.cardText}>{email}</Card.Text>
          </Card.Body>
        </Card>
    )
}