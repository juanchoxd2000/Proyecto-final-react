import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Agenda() {
    const [cargando, setCargando] = useState(false)
    const [datos, setDatos] = useState({
        servicio:"",
        nombre: "",
        apellido: "",
        celular: "",
        email: "",
        fecha:"",
        hora:"",

    });

    const cambioDeEntrada = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    };
    function guardarCliente(){
        
        setCargando(true)
        fetch("http://localhost:4000/agenda",{
            method:"POST",
            body:JSON.stringify(datos),
            headers:{
                "Content-Type":"application/json"
            }
        }
        ).then(function(respuesta){
            setCargando(false)
        })


    }
console.log(datos)
    return (
        <div className="container" style={{ width: "1200px", height: "800px", marginTop: "100px", marginBottom: "40px", background: "rgba(255,226,195, .6)", color: "#c5a011", padding: "20px", boxShadow: "0px 0px 10px 3px grey" }}>  
            <h1>Agendate aqui!</h1>
            <hr style={{ background: "#c5a011" }} />
            <div className="row">
                <form className="col-md-6">
                    <div className="form-group">
                        <label>Que servicio quieres realizarte?</label>
                        <select name="servicio" onChange={cambioDeEntrada} className="form-control">
                            <option value={""}>- Seleciona uno</option>
                            <option value={"cejas"}>Cejas</option>
                            <option value={"pestañas"}>Pestañas</option>
                            <option value={"uñas"}>Uñas</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input onChange={cambioDeEntrada} name="nombre" type="text" placeholder="Ingrese su nombre" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input onChange={cambioDeEntrada} name="apellido" type="text" placeholder="Ingrese su apellido" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Celular</label>
                        <input onChange={cambioDeEntrada} name="celular" type="number" placeholder="Ingrese su numero celular" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Correo electronico</label>
                        <input onChange={cambioDeEntrada} name="email" type="email" placeholder="Ingrese su email" className="form-control" />
                    </div>
                    <div className="form-group">
                    <label>Fecha deseada</label>
                    <input onChange={cambioDeEntrada} name="fecha" type="date" placeholder="Ingrese la fecha deseada" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Hora deseada</label>
                        <input onChange={cambioDeEntrada} name="hora" type="time" placeholder="Ingrese la hora deseada" className="form-control" />
                    </div>
                </form>
                <Button onClick={guardarCliente} disabled={cargando} className="btn  btn-block" style={{ color: "#c5a011" }}>
                    
                    {cargando ? "CARGANDO" : "Agendar"}
                    
                    </Button>
            </div>
        </div>
    );
};

export default Agenda;