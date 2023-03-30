import { CardItem } from "../CardItem/CardItem";
import "./CandidateList.css";

 
export const CandidateList = ()=> {
    
        
        
      

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
    {inputArray.map((item, index) => 
    
        <CardItem key={item.id} name={item.name} email={item.email} avatar={item.avatar}  />)}
        </div> </div>
        </>
        
    )
}