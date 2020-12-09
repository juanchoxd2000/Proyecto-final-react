import { Button } from '@material-ui/core';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col,
} from 'reactstrap';


const SobreTarejta = (props) => {
  return (
  <div >
    <Row>
      <Col sm="5">
          <img src="portada.jpg" alt="Responsive portada" className="img-fluid" style={{margin:'20px', maxWidth:"100%"}}/>
      </Col>    
      <Col sm="7">    
          <Card style={{margin:'30px', marginTop:'40px' }}>
            <CardBody style={{borderColor: '#333', margin: '10px' }}>
              <CardTitle tag="h3">Sobre nosotras</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Info</CardSubtitle>
              <CardText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nulla fuga et ipsum id obcaecati iure consequatur aliquam autem blanditiis repudiandae delectus eaque saepe odit itaque, tempore iusto a ducimus consequuntur mollitia suscipit architecto fugiat! Blanditiis ab dolores reprehenderit earum saepe facilis odio, harum autem eaque. Ipsa minus rerum, sapiente esse excepturi repellat odio tempore dolores et delectus quam perferendis autem aut nulla ipsam aliquam? Facilis eveniet explicabo molestias delectus asperiores voluptates rerum tempore temporibus eos autem quisquam fugit, consequatur, nemo laudantium modi reprehenderit sit quam, earum deleniti harum quod odit! Beatae quas quisquam aliquid? Optio repellendus in doloremque? Quas?</CardText>
              <Button color="secondary">Saber mas</Button>
            </CardBody>
          </Card>
      </Col>
    </Row>
  </div>
  );
};

export default SobreTarejta;