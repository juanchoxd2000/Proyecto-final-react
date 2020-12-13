import React, { useState } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./controles/Controles";
import { useForm, Form } from './useForm';
import * as employeeService from "../servicios/employeeService";


const genderItems = [
    { id: 'male', title: 'Hombre' },
    { id: 'female', title: 'Mujer' },
    { id: 'other', title: 'Otro' },
]

const initialFValues = {
    id: 0,
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    genero: 'male',
    servicioId: '',
    fecha: new Date(),
    terminos: false,
}

function AgendaMaterial() {

    const [cargando, setCargando] = useState(false)
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nombre' in fieldValues)
            temp.nombre = fieldValues.nombre ? "" : "Este campo es requerido."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email no es valido."
        if ('telefono' in fieldValues)
            temp.telefono = fieldValues.telefono.length > 8 ? "" : "Por favor agregar 09 y los valores correspondientes."
        if ('servicioId' in fieldValues)
            temp.servicioId = fieldValues.servicioId.length !== 0 ? "" : "Por favor elija un servicio."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
        }
    }
    function guardarCliente(){
        
      setCargando(true)
      fetch("http://localhost:4000/agenda",{
          method:"POST",
          body:JSON.stringify(values),
          headers:{
              "Content-Type":"application/json"
          }
      }
      ).then(function(respuesta){
          setCargando(false)
      })

console.log(setValues)
  }
    return (
      <div className="container" style={{ width: "80vw", height: "80vh", marginTop: "100px", marginBottom: "40px", color: "#c5a011", padding: "20px", boxShadow: "0px 0px 10px 3px grey" }}>
       <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <Controls.Input
                        name="nombre"
                        label="Nombre"
                        value={values.nombre}
                        onChange={handleInputChange}
                        error={errors.nombre}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Telefono"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleInputChange}
                        error={errors.telefono}
                    />
                    <Controls.Input
                        label="Ciudad"
                        name="ciudad"
                        value={values.ciudad}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Controls.RadioGroup
                        name="genero"
                        label="Genero"
                        value={values.genero}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="servicioId"
                        label="Servicio"
                        value={values.servicioId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.servicioId}
                    />
                    <Controls.DatePicker
                        name="fecha"
                        label="Fecha"
                        value={values.fecha}
                        onChange={handleInputChange}
                    />
                    <Controls.Checkbox
                        name="terminos"
                        label="Acepta recibir un menjase para la confirmacion de su cita?"
                        value={values.terminos}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Enviar"
                            onClick={guardarCliente}
                            disabled={cargando}>
                              {cargando ? "CARGANDO" : "Agendar"} 
                            </Controls.Button>
                        <Controls.Button
                            text="Volver"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
        </div>
    )
}

export default AgendaMaterial;