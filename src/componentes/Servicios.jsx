import { Button,CardActionArea, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import { Row, Col,} from 'reactstrap';

const useStyles = makeStyles({
    root: {
      maxWidth: 600,
    },
    media: {
      height: 280,
    },
  });
  

const Servicios = (props) => {
    const classes = useStyles();
  return (
  <div style={{marginTop:"100px",marginBottom:"40px", background:"rgba(255,226,195, .6)",
  color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey"}}>
      <Row style={{textAlign:"center"}}>
        <Col>
        <Typography variant="h1" component="h2">
            Servicios
          </Typography>
        </Col>
      </Row>
    <Row >
      <Col sm="4">
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="cejas.jpeg"
          title="cejas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cejas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis laudantium, eaque cupiditate odio saepe eveniet illo ipsam odit quas. Distinctio ipsa amet explicabo beatae quis repellendus odit harum consequatur?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Link to="/Servicios/Cejas"><Button className="btn-block" size="small" color="secondary">
          Ver mas
        </Button></Link>
      </CardActions>
    </Card>
      </Col>    
      <Col sm="4">    
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="pestañas.jpeg"
          title="Pestañas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pestañas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis laudantium, eaque cupiditate odio saepe eveniet illo ipsam odit quas. Distinctio ipsa amet explicabo beatae quis repellendus odit harum consequatur?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/Servicios/Pestañas"><Button className="btn-block" size="small" color="secondary">
          Ver mas
        </Button></Link>
      </CardActions>
    </Card>
      </Col>
      <Col sm="4">
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="uñas.jpeg"
          title="Uñas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Uñas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quis laudantium, eaque cupiditate odio saepe eveniet illo ipsam odit quas. Distinctio ipsa amet explicabo beatae quis repellendus odit harum consequatur?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/Servicios/Uñas"><Button className="btn-block" size="small" color="secondary">
          Ver mas
        </Button></Link>
      </CardActions>
    </Card>
      </Col> 
    </Row>
  </div>
  );
};

export default Servicios;