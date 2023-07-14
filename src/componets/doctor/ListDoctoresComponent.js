import React, { useEffect, useState } from 'react'
import DoctorService from '../../services/DoctorService';
import { Link } from "react-router-dom";
export const ListDoctoresComponet = () => {

    const [doctores, setDoctores] = useState([]);

    useEffect(() => {
        listarDoctores()
    }, [])

    const listarDoctores = () => {
        DoctorService.getAllDoctores().then((response) => {
            setDoctores(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteDoctor = (doctorId) => {
        DoctorService.deleteDoctor(doctorId).then((response) => {
            listarDoctores();
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
        
        <div className='container mt-5'>
            <br /><br /><br />
            <h2 className='text-center'>Lista de Doctores</h2>
            <Link to='/add-doctor' className='btn btn-primary mb-2'>Agregar Doctor</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Especialidad</th>
                        <th>Fecha</th>
                        <th>Hora Inicio</th>
                        <th>Hora Fin</th>
                        <th>Acciones</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        doctores.map((doctor) => {
                            return (
                                <tr key={doctor.id_doctor}>

                                    <td>{doctor.codigo}</td>
                                    <td>{doctor.nombres}</td>
                                    <td>{doctor.apellidoPaterno}</td>
                                    <td>{doctor.apellidoMaterno}</td>
                                    <td>{doctor.especialidad}</td>
                                    <td>{doctor.fecha}</td>
                                    <td>{doctor.horaInicio}</td>
                                    <td>{doctor.horaFin}</td>
                                    <td>
                                        <Link to={`/edit-doctor/${doctor.doctor}`} className='btn btn-info'>Actualizar</Link>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteDoctor(doctor.id_doctor)}>Eliminar</button>
                                    </td>
                                </tr>
                            )

                        }
                        )
                    }
                </tbody>
            </table>
        </div >
        </>
    )
}


export default ListDoctoresComponet;