import React, { useEffect, useState } from 'react'
import PacienteService from '../../services/PacienteService';
import { Link } from "react-router-dom";
export const ListPacientesComponet = () => {

    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        listarPacientes()
    }, [])

    const listarPacientes = () => {
        PacienteService.getAllPacientes().then((response) => {
            setPacientes(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const delePaciente = (pacienteId) => {
        PacienteService.deletePaciente(pacienteId).then((response) => {
            listarPacientes();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto">
                        <img src="../img/logomedicline2.png" alt="logo" width="150" />
                    </h1>

                    <a href="index.html" class="logo me-auto">
                        <img src="assets/img/logo.png" alt="" class="img-fluid" />
                    </a>

                    <div class="ml-auto">
                        <a class="appointment-btn scrollto" href="/home-doctor">Home</a>
                        <a class="appointment-btn scrollto" href="/"><span class="d-none d-md-inline">Cerrar</span> Sesión</a>
                    </div>

                </div>
            </header>
            <br></br><br></br>
            <div className='container mt-5'>
                <div class="section-title">
                    <h2>Lista de Pacientes</h2>
                </div>


                <section class="pacientes container">
                    <div class="row">
                        {pacientes.map((paciente) => (
                            <div class="col-sm-6 mt-4" key={paciente.id_paciente}>
                                <div class="card-two border">
                                    <h5 class="card-title text-center">DNI: {paciente.dni}</h5>
                                    <div class="card-body">
                                        <p class="card-text">Nombre: {paciente.nombres}</p>
                                        <p class="card-text">Apellido Paterno: {paciente.apellidoPaterno}</p>
                                        <p class="card-text">Estado Civil: {paciente.estadoCivil}</p>
                                        <p class="card-text">Teléfono: {paciente.telefono}</p>
                                        <p class="card-text">Hora: {paciente.hora}</p>
                                        <p class="card-text">Día: {paciente.dia}</p>
                                        <p class="card-text">Especialidad: {paciente.especialidad}</p>
                                        <p class="card-text">Sede: {paciente.sede}</p>
                                        <div class="text-center">
                                            <a class="btn btn-danger" onClick={() => delePaciente(paciente.id_paciente)}>Eliminar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </>
    )
}

export default ListPacientesComponet;