import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button'
import "bootstrap/dist/css/bootstrap.min.css"
function Footer(){
    return(
        
    <footer className="page-footer bg-dark">

    <div style={{backgroundColor:'#ffe2c3'}} >
    <div className="container">
        <div className="row py-4 d-flex align-items-center" >
        <Button href="https://www.facebook.com/JMbrowss"><FacebookIcon/></Button>    
        <Button href="https://www.instagram.com/browsjm/"><InstagramIcon/></Button>    
        <Button href="https://api.whatsapp.com/send?phone=59891716706&text=&source=&data=&app_absent="><WhatsAppIcon/></Button>    
        <div className="col-md-12 text-center"> </div>    

    </div>
    </div>
    </div>

    <div className="container text-center text-md-left mt-5">
    <div className="row">

        <div className="col-md-4 mx-auto mb-4" style={{color:"white"}}>
        <h6 className="text-uppercase font-weight-bold" >Siguenos en Instagram</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width:"200px", height: "2px", background:"#ffe2c3"}}/>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>

        <div className="col-md-4 mx-auto mb-4" style={{color:"white"}}>
        <h6 className="text-uppercase font-weight-bold" >Siguenos en Facebook</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width:"190px", height:"2px", background:"#ffe2c3"}}/>  
        <iframe title="facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FJMbrowss&tabs=timeline&width=300&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="400px" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
        </div>

        <div className="col-md-3 mx-auto mb-4" style={{color:"white"}}>
        <h6 className="text-uppercase font-weight-bold" >Contacto</h6>
        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width:"85px", height:"2px", background:"#ffe2c3"}}/>
            <ul className="list-unstyled" >
                <li className="my-2"><LocationOnIcon/>Julio Herrera y Obes 1323 esq.18 Julio</li>
                <li className="my-2"><EmailIcon/> JMBrows@gmail.com</li>
                <li className="my-2"><PhoneIcon/> +598 09 716 706</li>
            
            </ul>
        </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
    <p>&copy; Todos los derechos reservados 2020</p>
    <p>Designed by Juan Petit</p>
    </div>
    </footer>

    );
};

export default Footer;