import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import React from "react";
import NavBar from "./componentes/NavBar";
import Servicios from "./componentes/Servicios";
import Ubicacion from "./componentes/Ubicacion"
import Inicio from "./componentes/Inicio";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Agenda from "./componentes/Agenda";

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
          <Route path="/Servicios" component={Servicios}/>
          <Route path="/Agenda" component={Agenda}/>
          <Route path="/Inicio" component={Inicio}/>
        </Switch>
        <Footer/>

      </BrowserRouter>
  </ThemeProvider>

  
  );
}

export default App;