import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import NavBar from "./componentes/NavBar";
import Servicios from "./componentes/Servicios";
import Ubicacion from "./componentes/Ubicacion";
import Inicio from "./componentes/Inicio";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Agenda from "./componentes/Agenda";
import Uñas from "./componentes/Uñas";
import Cejas from "./componentes/Cejas";
import Pestañas from "./componentes/Pestañas";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:"#ffe2c3"
    },
    secondary:{
      main:"#c5a011"
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/Contacto" component={Contacto}/>
          <Route path="/Ubicacion" component={Ubicacion}/>
          <Route exact path="/Servicios" component={Servicios}/>
          <Route exact path="/Servicios/Uñas" component={Uñas}/>
          <Route exact path="/Servicios/Pestañas" component={Pestañas}/>
          <Route exact path="/Servicios/Cejas" component={Cejas}/>
          <Route path="/Agenda" component={Agenda}/>
          <Route path="/" component={Inicio}/>
        </Switch>
        <Footer/>

      </BrowserRouter>
  </ThemeProvider>

  
  );
}

export default App;