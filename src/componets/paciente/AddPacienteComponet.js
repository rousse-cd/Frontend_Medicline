import React, { useEffect, useState } from 'react'
import PacienteService from '../../services/PacienteService';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import features from '../img/undraw_medicine_b-1-ol.svg';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validatePaciente';

export const AddPacienteComponet = () => {
    const [fechaEmision, setFechaEmision] = useState('');
    const [dni, setDni] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [hora, setHora] = useState('');
    const [dia, setDia] = useState('');
    const [especialidad, setEspecialidad] = useState('');
    const [sede, setSede] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState({
        fechaEmision: '',
        dni: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        estadoCivil: '',
        telefono: '',
        correo: '',
        hora: '',
        dia: '',
        especialidad: '',
        sede: '',
    });

    const saveOrUpdatePaciente = (e) => {
        e.preventDefault();
        const paciente = { fechaEmision, dni, nombres, apellidoPaterno, apellidoMaterno, estadoCivil, telefono, correo, hora, dia, especialidad, sede };

        if (id) {
            PacienteService.updatePaciente(id, paciente).then((response) => {
                console.log(response.data);
                navigate('/paciente');
            }).catch(error => {
                console.log(error);
            })
        } else {
            PacienteService.createPaciente(paciente).then((response) => {
                console.log(response.data);
                navigate('/home-paciente');
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {
        PacienteService.getPacienteById(id).then((response) => {
            setFechaEmision(response.data.fechaEmision);
            setDni(response.data.dni);
            setNombres(response.data.nombres);
            setApellidoPaterno(response.data.apellidoPaterno);
            setApellidoMaterno(response.data.apellidoMaterno);
            setEstadoCivil(response.data.estadoCivil);
            setTelefono(response.data.telefono);
            setCorreo(response.data.correo);
            setHora(response.data.hora);
            setDia(response.data.dia);
            setEspecialidad(response.data.especialidad);
            setSede(response.data.sede);

        }).catch(error => {
            console.log(error);
        })
    }, []);


    const title = () => {
        if (id) {
            return <h2 className='text-center'>Actualizar paciente</h2>;
        } else {
            return <h2 className='text-center'>Agregar paciente</h2>;
        }
    }
    return (
        <>
            <div>
                <main id="main">
                    <section id="services" class="services  mt-5">

                        <div class="container">

                            <div class="section-title">
                                <h2>Solicite su Reserva</h2>
                                <p></p>
                            </div>
                            <div class="row gy-4">
                                <div class="col-lg-6">
                                    <img src={features} class="img-fluid" alt="Features2" />
                                </div>

                                <div class="col-lg-6">
                                    <form>
                                        <div class="row gy-4">
                                            <div className={`col-md-6 ${errors.dni ? 'has-error' : dni && 'is-valid'}`}>
                                                <label className="form-label">DNI</label>
                                                <input
                                                    type="text"
                                                    name="dni"
                                                    className={`form-control ${errors.dni ? 'is-invalid' : dni && 'is-valid'}`}
                                                    maxLength="8"
                                                    value={dni}
                                                    onChange={(e) => setDni(e.target.value)}
                                                    onKeyPress={Numbers}
                                                    required
                                                />
                                                {errors.dni && <div className="invalid-feedback">{errors.dni}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.fechaEmision ? 'has-error' : fechaEmision && 'is-valid'}`}>
                                                <label className="form-label">Fecha de Emsión</label>
                                                <input
                                                    type="date"
                                                    name="fechaEmision"
                                                    className={`form-control ${errors.fechaEmision ? 'is-invalid' : fechaEmision && 'is-valid'}`}
                                                    value={fechaEmision}
                                                    onChange={(e) => setFechaEmision(e.target.value)}
                                                    onKeyPress={Numbers}
                                                    required
                                                />
                                                {errors.fechaEmision && <div className="invalid-feedback">{errors.fechaEmision}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.nombres ? 'has-error' : nombres && 'is-valid'}`}>
                                                <label className="form-label">Nombres</label>
                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    className={`form-control form-control-sm ${errors.nombres ? 'is-invalid' : nombres && 'is-valid'}`}
                                                    maxLength="25"
                                                    value={nombres}
                                                    onChange={(e) => setNombres(e.target.value)}
                                                    onKeyPress={Letters}
                                                    required
                                                />
                                                {errors.nombres && <div className="invalid-feedback">{errors.nombres}</div>}
                                            </div>
                                            <div className={`col-md-6 ${errors.apellidoPaterno ? 'has-error' : apellidoPaterno && 'is-valid'}`}>
                                                <label className="form-label">Apellido Paterno</label>
                                                <input
                                                    type="text"
                                                    name="apellidoPaterno"
                                                    className={`form-control ${errors.apellidoPaterno ? 'is-invalid' : apellidoPaterno && 'is-valid'}`}
                                                    maxLength="20"
                                                    value={apellidoPaterno}
                                                    onChange={(e) => setApellidoPaterno(e.target.value)}
                                                    onKeyPress={Letters}
                                                    required
                                                />
                                                {errors.apellidoPaterno && <div className="invalid-feedback">{errors.apellidoPaterno}</div>}
                                            </div>
                                            <div className={`col-md-6 ${errors.apellidoMaterno ? 'has-error' : apellidoMaterno && 'is-valid'}`}>
                                                <label className="form-label">Apellido Materno</label>
                                                <input
                                                    type="text"
                                                    name="apellidoMaterno"
                                                    className={`form-control ${errors.apellidoMaterno ? 'is-invalid' : apellidoMaterno && 'is-valid'}`}
                                                    maxLength="20"
                                                    value={apellidoMaterno}
                                                    onChange={(e) => setApellidoMaterno(e.target.value)}
                                                    onKeyPress={Letters}
                                                    required
                                                />
                                                {errors.apellidoMaterno && <div className="invalid-feedback">{errors.apellidoMaterno}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.estadoCivil ? 'has-error' : estadoCivil && 'is-valid'}`}>
                                                <label className="form-label">Estado Civil</label>
                                                <select
                                                    name="estadoCivil"
                                                    className={`form-control ${errors.estadoCivil ? 'is-invalid' : estadoCivil ? 'is-valid' : ''}`}
                                                    value={estadoCivil}
                                                    onChange={(e) => setEstadoCivil(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Seleccione su estado civil</option>
                                                    <option value="Soltero">Soltero</option>
                                                    <option value="Casado">Casado</option>
                                                    <option value="Divorciado">Divorciado</option>
                                                    <option value="Viudo">Viudo</option>
                                                    
                                                </select>
                                                
                                                {errors.estadoCivil && <div className="invalid-feedback">{errors.estadoCivil}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.telefono ? 'has-error' : telefono && 'is-valid'}`}>
                                                <label className="form-label">Telefono</label>
                                                <input
                                                    type="text"
                                                    name="telefono"
                                                    className={`form-control ${errors.telefono ? 'is-invalid' : telefono && 'is-valid'}`}
                                                    maxLength="9"
                                                    value={telefono}
                                                    onChange={(e) => setTelefono(e.target.value)}
                                                    onKeyPress={Numbers}
                                                    required
                                                />
                                                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                                            </div>
                                            <div className={`col-md-6 ${errors.correo ? 'has-error' : correo && 'is-valid'}`}>
                                                <label className="form-label">Correo</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className={`form-control ${errors.correo ? 'is-invalid' : correo && 'is-valid'}`}
                                                    value={correo}
                                                    onChange={(e) => setCorreo(e.target.value)}
                                                    required
                                                />
                                                {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.hora ? 'has-error' : hora && 'is-valid'}`}>
                                                <label className="form-label">Hora</label>
                                                <input
                                                    type="time"
                                                    name="hora"
                                                    className={`form-control ${errors.hora ? 'is-invalid' : hora && 'is-valid'}`}
                                                    value={hora}
                                                    onChange={(e) => setHora(e.target.value)}
                                                    required
                                                />
                                                {errors.hora && <div className="invalid-feedback">{errors.hora}</div>}
                                            </div>
                                            <div className={`col-md-6 ${errors.dia ? 'has-error' : dia && 'is-valid'}`}>
                                                <label className="form-label">Día</label>
                                                <input
                                                    type="date"
                                                    name="dia"
                                                    className={`form-control ${errors.dia ? 'is-invalid' : dia && 'is-valid'}`}
                                                    value={dia}
                                                    onChange={(e) => setDia(e.target.value)}
                                                    required
                                                />
                                                {errors.dia && <div className="invalid-feedback">{errors.dia}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.especialidad ? 'has-error' : especialidad && 'is-valid'}`}>
                                                <label className="form-label">Especialidad</label>
                                                <select
                                                    name="especialidad"
                                                    className={`form-control ${errors.especialidad ? 'is-invalid' : especialidad ? 'is-valid' : ''}`}
                                                    value={especialidad}
                                                    onChange={(e) => setEspecialidad(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Seleccione una especialidad</option>
                                                    <option value="Cardiologia">Cardiología</option>
                                                    <option value="cirugia general">Cirugía General</option>
                                                    <option value="Cirugia toracida y cardiovascular">Cirugía Torácida y Cardiovascular</option>
                                                    <option value="Dermatología">Dermatología</option>
                                                    <option value="Endocrinologia">Endocrinología</option>
                                                    <option value="Ginecología y obstetricia">Ginecología y Obstetricia</option>
                                                    <option value="Gastroenterologia">Gastroenterología</option>
                                                    <option value="Pediatría">Pediatría</option>
                                                    <option value="Medicina interna">Medicina Interna</option>
                                                    <option value="Neumologia">Neumología</option>
                                                    <option value="Neurología">Neurología</option>
                                                    <option value="Nutricion">Nutrición</option>
                                                    <option value="Odontologia">Odontología</option>
                                                    <option value="Oftalmologia">Oftalmología</option>
                                                    <option value="Otorrinolaringología">Otorrinolaringología</option>
                                                    <option value="Resonancia Magnética">Resonancia Magnética</option>
                                                    <option value="Reumatología">Reumatología</option>
                                                    <option value="Traumatología">Traumatología</option>
                                                    <option value="Tomografía">Tomografía</option>
                                                    <option value="Urología">Urología</option>
                                                </select>
                                                {errors.especialidad && <div className="invalid-feedback">{errors.especialidad}</div>}
                                            </div>

                                            <div className={`col-md-6 ${errors.sede ? 'has-error' : sede && 'is-valid'}`}>
                                                <label className="form-label">Sede</label>
                                                <select
                                                    name="sede"
                                                    className={`form-control ${errors.sede ? 'is-invalid' : sede ? 'is-valid' : ''}`}
                                                    value={sede}
                                                    onChange={(e) => setSede(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Seleccione una sede</option>
                                                    <option value="Miraflores">Miraflores</option>
                                                    <option value="San Borja">San Borja</option>
                                                    <option value="San Isidro">San Isidro</option>
                                                    <option value="Surco">Surco</option>
                                                    <option value="Villa el Salvador">Villa el Salvador</option>
                                                    
                                                </select>
                                                
                                                {errors.sede && <div className="invalid-feedback">{errors.sede}</div>}
                                            </div>




                                            <div class="col-lg-12 d-flex justify-content-center">
                                                <button
                                                    className="btn btn-success"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const { isValid, errors } = validateForm(
                                                            dni,
                                                            fechaEmision,
                                                            nombres,
                                                            apellidoPaterno,
                                                            apellidoMaterno,
                                                            estadoCivil,
                                                            telefono,
                                                            correo,
                                                            hora,
                                                            dia,
                                                            especialidad,
                                                            sede
                                                );
                                                setErrors(errors);
                                                if (isValid) {
                                                    saveOrUpdatePaciente(e);
                                                        }
                                                    }}
                                                >
                                                Guardar
                                            </button>
                                            &nbsp;&nbsp;
                                            <Link to="/home-paciente" className="btn btn-danger">
                                                Cancelar
                                            </Link>
                                        </div>
                                </div>

                            </form>
                        </div>
                    </div>
            </div>
        </section >

                </main >
            </div >

        </>
    );
}

export default AddPacienteComponet;