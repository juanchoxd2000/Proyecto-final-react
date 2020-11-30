import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import React from "react";
import NavBar from "./componentes/NavBar";
import MainSlider from "./componentes/MainSlider";

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
    <ThemeProvider theme={theme}>
     <Grid container spacing={3} >
       <Grid item>
        <NavBar/>
       </Grid>
     </Grid>
              <MainSlider/>

  </ThemeProvider>
  );
}

export default App;