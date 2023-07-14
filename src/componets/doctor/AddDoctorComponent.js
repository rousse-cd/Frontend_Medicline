import React, { useEffect, useState } from 'react';
import DoctorService from '../../services/DoctorService';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import features2 from '../img/undraw_doctor_kw-5-l.svg';
import { Letters } from '../../helpers/Letters';
import { Numbers } from '../../helpers/Numbers';
import { validateForm } from '../../helpers/validateDoctor';

export const AddDoctorComponent = () => {
  const [codigo, setCodigo] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({
    codigo: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    especialidad: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
  });

  const saveOrUpdateDoctor = (e) => {
    e.preventDefault();
    const doctor = {
      codigo,
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      especialidad,
      fecha,
      horaInicio,
      horaFin,
    };

    if (id) {
      DoctorService.updateDoctor(id, doctor)
        .then((response) => {
          console.log(response.data);
          navigate('/doctores');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      DoctorService.createDoctor(doctor)
        .then((response) => {
          console.log(response.data);
          navigate('/doctores');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      DoctorService.getDoctorById(id)
        .then((response) => {
          const doctorData = response.data;
          setCodigo(doctorData.codigo);
          setNombres(doctorData.nombres);
          setApellidoPaterno(doctorData.apellidoPaterno);
          setApellidoMaterno(doctorData.apellidoMaterno);
          setEspecialidad(doctorData.especialidad);
          setFecha(doctorData.fecha);
          setHoraInicio(doctorData.horaInicio);
          setHoraFin(doctorData.horaFin);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const getTitle = () => {
    return id ? <h2 className="text-center">Actualizar Doctor</h2> : <h2 className="text-center">Agregar Doctor</h2>;
  };

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
                        <a class="appointment-btn scrollto" href="/doctores">Lista de Doctores</a>
                        <a class="appointment-btn scrollto" href="/"><span class="d-none d-md-inline">Cerrar</span> Sesión</a>
                    </div>

                </div>
            </header>
      <div>
        <main id="main">
          <section id="services" class="services  mt-5">

            <div class="container">

              <div class="section-title">
                <h2>Ingrese Horario</h2>
                <p></p>
              </div>
              <div class="row gy-4">
                <div class="col-lg-6">
                  <img src={features2} class="img-fluid" alt="Features2" />
                </div>

                <div class="col-lg-6">
                  <form>
                    <div class="row gy-4">

                      <div className={`col-md-6 ${errors.codigo ? 'has-error' : codigo && 'is-valid'}`}>
                        <label className="form-label">Código</label>
                        <input
                          type="text"
                          name="codigo"
                          className={`form-control ${errors.codigo ? 'is-invalid' : codigo && 'is-valid'}`}
                          maxLength="5"
                          value={codigo}
                          onChange={(e) => setCodigo(e.target.value)}
                          onKeyPress={Numbers}
                          required
                        />
                        {errors.codigo && <div className="invalid-feedback">{errors.codigo}</div>}
                      </div>
                      <div className={`col-md-6 ${errors.nombres ? 'has-error' : nombres && 'is-valid'}`}>
                        <label className="form-label">Nombres</label>
                        <input
                          type="text"
                          name="nombres"
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
                          <option value="cardiologia">Cardiología</option>
                          <option value="cirugia general">Cirugía General</option>
                          <option value="cirugia toracida y cardiovascular">Cirugía Torácida y Cardiovascular</option>
                          <option value="dermatología">Dermatología</option>
                          <option value="endocrinologia">Endocrinología</option>
                          <option value="ginecología y obstetricia">Ginecología y Obstetricia</option>
                          <option value="gastroenterologia">Gastroenterología</option>
                          <option value="pediatría">Pediatría</option>
                          <option value="medicina interna">Medicina Interna</option>
                          <option value="neumologia">Neumología</option>
                          <option value="neurología">Neurología</option>
                          <option value="nutricion">Nutrición</option>
                          <option value="odontologia">Odontología</option>
                          <option value="oftalmologia">Oftalmología</option>
                          <option value="otorrinolaringologia">Otorrinolaringología</option>
                          <option value="resonancia magnetica">Resonancia Magnética</option>
                          <option value="reumatologia">Reumatología</option>
                          <option value="traumatología">Traumatología</option>
                          <option value="tomografia">Tomografía</option>
                          <option value="urologia">Urología</option>
                        </select>
                        {errors.especialidad && <div className="invalid-feedback">{errors.especialidad}</div>}
                      </div>

                      <div className={`col-md-6 ${errors.fecha ? 'has-error' : fecha && 'is-valid'}`}>
                        <label className="form-label">Fecha</label>
                        <input
                          type="date"
                          name="fecha"
                          className={`form-control ${errors.fecha ? 'is-invalid' : fecha && 'is-valid'}`}
                          value={fecha}
                          onChange={(e) => setFecha(e.target.value)}
                          required
                        />
                        {errors.fecha && <div className="invalid-feedback">{errors.fecha}</div>}
                      </div>

                      <div className={`col-md-6 ${errors.horaInicio ? 'has-error' : horaInicio && 'is-valid'}`}>
                        <label className="form-label">Hora Inicio</label>
                        <input
                          type="time"
                          name="horaInicio"
                          className={`form-control ${errors.horaInicio ? 'is-invalid' : horaInicio && 'is-valid'}`}
                          value={horaInicio}
                          onChange={(e) => setHoraInicio(e.target.value)}
                          required
                        />
                        {errors.horaInicio && <div className="invalid-feedback">{errors.horaInicio}</div>}
                      </div>

                      <div className={`col-md-6 ${errors.horaFin ? 'has-error' : horaFin && 'is-valid'}`}>
                        <label className="form-label">Hora Fin</label>
                        <input
                          type="time"
                          name="horaFin"
                          className={`form-control ${errors.horaFin ? 'is-invalid' : horaFin && 'is-valid'}`}
                          value={horaFin}
                          onChange={(e) => setHoraFin(e.target.value)}
                          required
                        />
                        {errors.horaFin && <div className="invalid-feedback">{errors.horaFin}</div>}
                      </div >
                      <div class="col-lg-12 d-flex justify-content-center">
                        <button
                          className="btn btn-success"
                          onClick={(e) => {
                            e.preventDefault();
                            const { isValid, errors } = validateForm(
                              codigo,
                              nombres,
                              apellidoMaterno,
                              apellidoPaterno,
                              especialidad,
                              fecha,
                              horaInicio,
                              horaFin
                            );
                            setErrors(errors);
                            if (isValid) {
                              saveOrUpdateDoctor(e);
                            }
                          }}
                        >
                          Guardar
                        </button>
                        &nbsp;&nbsp;
                        <Link to="/home-doctor" className="btn btn-danger">
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
      </div>

    </>
  );
};

export default AddDoctorComponent;
