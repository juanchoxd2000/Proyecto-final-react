import { Button,CardActionArea, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";


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
  color:"#c5a011", padding:"20px", boxShadow:"0px 0px 10px 3px grey", textAlign:"center"}}>
    <Typography variant="h1" component="h2">
            Servicios
          </Typography>
      <Grid container>
      <Grid item xs={12} sm={12} md={4}>
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="cejas.jpg"
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
       <Link to="/Agenda"><Button className="btn-block" size="small" color="secondary">
          Agendar
        </Button></Link>
      </CardActions>
    </Card>
      </Grid>    
      <Grid item xs={12} sm={12} md={4}>    
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="pestañas.jpg"
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
      <Link to="/Agenda"><Button className="btn-block" size="small" color="secondary">
      Agendar
        </Button></Link>
      </CardActions>
    </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
      <Card className={classes.root} style={{margin:'30px', marginTop:'40px' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="uñas.jpg"
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
      <Link to="/Agenda"><Button className="btn-block" size="small" color="secondary">
      Agendar
        </Button></Link>
      </CardActions>
    </Card>
      </Grid> 
    </Grid>
  </div>
  );
};

export default Servicios;