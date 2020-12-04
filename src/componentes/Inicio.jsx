import React from "react";
import MainSlider from "./MainSlider";
import SobreTarejta from "./SobreTarjeta";
import Servicios from "./Servicios"

function Inicio(){
    return(
        <React.Fragment>
            <MainSlider/>
            <SobreTarejta/>
            <Servicios/>
        </React.Fragment>
    );
};

export default Inicio;