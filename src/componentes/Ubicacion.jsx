import { Button } from "@material-ui/core";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Ubicacion(){
    return(
        <div className="container" style={{width:"1200px", height:"700px", marginTop:"100px",marginBottom:"40px", background:"rgba(255,226,195, .6)", color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey"}}>
            <h1>Google Maps</h1>
            <hr style={{background:"#c5a011"}}/>
            <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9981681482545!2d-56.196849384334996!3d-34.906495481088946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f811ec19da28d%3A0xf1fee50c3907e361!2sJM%20Brows!5e0!3m2!1ses!2suy!4v1607007008078!5m2!1ses!2suy" style={{width:"100%", height:"80%",  border:"0", allowfullscreen:"", ariaHidden:"false", tabindex:"0"}}></iframe>
            <Button href="https://www.google.com/maps/place/JM+Brows/@-34.9064999,-56.1946607,17z/data=!4m5!3m4!1s0x959f811ec19da28d:0xf1fee50c3907e361!8m2!3d-34.9064999!4d-56.1946607" className="btn" style={{color:"#c5a011"}}>Ver en Google Maps</Button>
        </div>
    );
};

export default Ubicacion;