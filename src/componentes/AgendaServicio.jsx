import { Button } from "@material-ui/core";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"



function Agenda(){

   
    return(
        <div className="container" style={{width:"1200px", height:"700px", marginTop:"100px",marginBottom:"40px", background:"rgba(255,226,195, .6)", color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey"}}>
            <h1>Agendate aqui!</h1>
                <hr style={{background:"#c5a011"}}/>
                
                <Button className="btn  btn-block" style={{color:"#c5a011"}}>Siguiente</Button>
            
           <div className="row">
                
           </div>
        </div>
    );
};

export default Agenda;