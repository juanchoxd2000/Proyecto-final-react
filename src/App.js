import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import React from "react";
import NavBar from "./componentes/NavBar";
import MainSlider from "./componentes/MainSlider";
import SobreTarjeta from "./componentes/SobreTarjeta";
import Footer from "./componentes/Footer";

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
     <Grid container spacing={3} >
       <Grid item>
        <NavBar/>
        <MainSlider />
        <SobreTarjeta/>
        <Footer/>
       </Grid>
     </Grid>
    
  </ThemeProvider>

  
  );
}

export default App;