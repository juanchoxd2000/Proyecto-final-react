import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

function Contacto(){
    return(
    <React.Fragment>
        
        <div className="container contact-form" style={{marginTop:"100px",marginBottom:"40px", background:"rgba(255,226,195, .6)",
			color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey"}} >
	<h1>Contactanos</h1>
	<hr style={{background:"#c5a011"}}/>

	<div className="row">
   
       <div className="col-md-6">
       	<address><LocationOnIcon/> Julio Herrera y Obes 1323 esq.18 Julio</address>
       	<p><EmailIcon/>JMBrows@gmail.com</p>
       	<p><PhoneIcon/>+598 09 716 706</p>
       </div>

       <div className="col-md-6">
       	
         <div className="form-group">
         	<label>Nombre</label>
         	<input type="text" className="form-control"/>
         </div>

         <div className="form-group">
         	<label>Email</label>
         	<input type="text" className="form-control"/>
         </div>

         <div className="form-group">
         	<label>Cuentanos lo que quieras</label>
         	<textarea  className="form-control" rows="7"></textarea>
         </div>

         <div className="form-group">
         <Button className="btn  btn-block" style={{color:"#c5a011"}}>Enviar</Button>
         </div>

       </div>

    </div>

</div>
</React.Fragment>
    );
};

export default Contacto;