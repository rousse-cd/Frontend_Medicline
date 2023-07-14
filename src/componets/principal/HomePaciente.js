import React from 'react';

import doctors1 from '../img/doctors/doctors-1.jpg';
import doctors2 from '../img/doctors/doctors-2.jpg';
import doctors3 from '../img/doctors/doctors-3.jpg';
import doctors4 from '../img/doctors/doctors-4.jpg';
import gallery1 from '../img/gallery/gallery-1.jpg';
import gallery2 from '../img/gallery/gallery-2.jpg';
import gallery3 from '../img/gallery/gallery-3.jpg';
import gallery4 from '../img/gallery/gallery-4.jpg';
import gallery5 from '../img/gallery/gallery-5.jpg';
import gallery6 from '../img/gallery/gallery-6.jpg';
import gallery7 from '../img/gallery/gallery-7.jpg';
import gallery8 from '../img/gallery/gallery-8.jpg';
import departments1 from '../img/departments-1.jpg';
import departments2 from '../img/departments-2.jpg';
import departments3 from '../img/departments-3.jpg';
import departments4 from '../img/departments-4.jpg';


export const HomePaciente = () => {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>Bienvenido a Medicline</h1>
          <h2>Atención médica innovadora</h2>
          <a class="btn-get-started scrollto">Empezamos</a>
        </div>
      </section>

      <main id="main">
        <section id="why-us" class="why-us">
          <div class="container">

            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="content">
                  <h3>¿Por qué elegir Medicline?</h3>
                  <p>
                    Ofrecemos un servicio integral y de calidad, con el más destacado staff médico del país, moderna infraestructura y
                    tecnología al servicio de nuestros pacientes con la confianza y seguridad de siempre.
                  </p>
                  <div class="text-center">
                    <a href="#" class="more-btn">Leer Más <i class="bx bx-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>El mejor staff de medicos</h4>
                        <p>Médicos de primer nivel y los tecnólogos médicos más especializados</p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Tecnología de Primera</h4>
                        <p>Mediante la tecnología más avanzada, le brindamos al paciente un diagnóstico extremadamente preciso</p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-images"></i>
                        <h4>Campañas</h4>
                        <p>Realizamos ofertas medicas par el bien de las personas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="about" class="about">
          <div class="container-fluid">

            <div class="row">
              <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
              </div>

              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Nosotros</h3>
                <p>Somos una clinica dedicada  a brindar servicios especializados de atencion en salud por medio de un prestigio en conjunto de profesionales comprometidos con la vida

                </p>

                <div class="icon-box">
                  <div class="icon"><i class="bx bx-fingerprint"></i></div>
                  <h4 class="title"><a href="">Misión</a></h4>
                  <p class="description">Brindar servicios de salud confiables y seguros a nuestra comunidad orientándonos permanentemente hacia la excelencia</p>
                </div>

                <div class="icon-box">
                  <div class="icon"><i class="bx bx-gift"></i></div>
                  <h4 class="title"><a href="">Visión</a></h4>
                  <p class="description">Ser reconocidos en el ámbito de salud por nuestro prestigio, trayectoria y vocación de servicio, orientados a nuestros pacientes, clientes y colaboradores</p>
                </div>

                <div class="icon-box">
                  <div class="icon"><i class="bx bx-atom"></i></div>
                  <h4 class="title"><a href="">Valores</a></h4>
                  <p class="description">Nuestros principales valores son la ética, confianza, seguridad, excelencia</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="counts" class="counts">
          <div class="container">

            <div class="row">
              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="fas fa-user-md"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Doctors</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="far fa-hospital"></i>
                  <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Departmentos</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-flask"></i>
                  <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Laboratorios</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" class="purecounter"></span>
                  <p>Premios</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container">

            <div class="section-title">
              <h2>Servicios</h2>
              <p>Ofrecemos una amplia gama de servicios para atender las necesidades de salud de los pacientes. Algunos de los servicios que puedes encontrar en nuestra clínica incluyen:</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-pills"></i></div>
                  <h4><a href="">Atención Ambulatoria</a></h4>
                  <p>Los médicos realizan evaluaciones y diagnósticos de enfermedades, así como brindan recomendaciones y prescriben tratamientos.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-pills"></i></div>
                  <h4><a href="">Medicina Preventiva</a></h4>
                  <p>Realización de exámenes médicos completos para evaluar el estado de salud general y detectar posibles riesgos en etapas tempranas.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-hospital-user"></i></div>
                  <h4><a href="">Laboratorio</a></h4>
                  <p> Se toman muestras de diferentes áreas del cuerpo, para identificar la presencia de bacterias y determinar el tratamiento adecuado.</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-dna"></i></div>
                  <h4><a href="">Banco de Sangre</a></h4>
                  <p>Proveer sangre y componentes sanguineos por medio de un soporte transfuncional seguro</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-wheelchair"></i></div>
                  <h4><a href="">Ecografias</a></h4>
                  <p>Diagnóstico de enfermedades por medio de imágenes del cuerpo, obtenidas mediante ultrasonido</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon"><i class="fas fa-notes-medical"></i></div>
                  <h4><a href="">Pediatria</a></h4>
                  <p>Atención integral de problemas en pacientes pediatricos</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="departments" class="departments">
          <div class="container">

            <div class="section-title">
              <h2>Especialidades</h2>
              <p>Puedes encontrar diversas especialidades médicas en nuestra clínica para brindarte una atención integral adecuada. Algunas de las especialidades comunes de nuestra clínica son:</p>
            </div>
            <br></br><br></br>
            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Neurología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Pediatría</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Ginecología y obstetricia</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Cirugía Torácica y Cardiovascular</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiología</h3>
                        <p class="fst-italic">La cardiología es la especialidad médica que se encarga del diagnóstico y tratamiento de las enfermedades relacionadas con el corazón y el sistema cardiovascular.</p>
                        <p>El objetivo de la cardiología es prevenir, diagnosticar y tratar las enfermedades cardiovasculares para mejorar la salud y calidad de vida de los pacientes. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={departments1} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Neurología</h3>
                        <p class="fst-italic">Es la especialidad que se encarga del diagnóstico y tratamiento de las enfermedades relacionadas con los pulmones y el sistema respiratorio.</p>
                        <p> Los neurologos son médicos especializados en el diagnóstico y manejo de trastornos neurológicos, como enfermedades cerebrovasculares, etc.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-2.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Pediatría</h3>
                        <p class="fst-italic">La pediatría es una especialidad médica que se enfoca en la salud y el cuidado de los niños, desde el nacimiento hasta la adolescencia.</p>
                        <p>Su objetivo principal es asegurar el crecimiento y desarrollo saludable de los niños, brindar atención médica preventiva, realizar exámenes de rutina.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-3.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Ginecología y obstetricia</h3>
                        <p class="fst-italic">La ginecología y obstetricia es una especialidad médica que se ocupa de la salud y el cuidado del sistema reproductivo femenino.</p>
                        <p>Su objetivo es proporcionar atención integral, promover la salud reproductiva y brindar apoyo tanto físico como emocional a las pacientes. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-4.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Cirugía Torácica y Cardiovascular</h3>
                        <p class="fst-italic">Es una especialidad médica que se dedica al diagnóstico, tratamiento y manejo quirúrgico de enfermedades que afectan el corazón, los pulmones, y los vasos sanguíneos. </p>
                        <p>La cirugía torácica y cardiovascular es fundamental para el tratamiento de enfermedades graves y potencialmente mortales del sistema cardiopulmonar. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-5.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br></br><br></br>
            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-6">Oftalmología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-7">Gastroenterología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-8">Odontología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-9">Traumatología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-10">Otorrinolaringología</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-6">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Oftalmología</h3>
                        <p class="fst-italic">La oftalmología es una especialidad médica dedicada al estudio y tratamiento de las enfermedades y trastornos relacionados con los ojos y la visión.</p>
                        <p> Su objetivo principal es preservar y mejorar la salud visual de los pacientes. Los oftalmólogos pueden realizar exámenes de la vista completos para evaluar la agudeza visual, el campo visual y la salud ocular en general. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={departments2} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-7">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Gastroenterología</h3>
                        <p class="fst-italic">Es una especialidad médica que se enfoca en el diagnóstico, tratamiento y prevención de las enfermedades que afectan el sistema digestivo. </p>
                        <p> Aborda trastornos digestivos que pueden tener un impacto significativo en la calidad de vida de los pacientes. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-2.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-8">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Odontología</h3>
                        <p class="fst-italic">La odontología es una rama de la medicina que se enfoca en el diagnóstico, tratamiento y prevención de enfermedades y condiciones que afectan la salud oral y dental.</p>
                        <p>El objetivo principal de la odontología es mantener la salud bucal y prevenir enfermedades dentales. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-3.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-9">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Traumatología</h3>
                        <p class="fst-italic">Es una especialidad que se ocupa del diagnóstico, tratamiento y rehabilitación de las lesiones y enfermedades que afectan al sistema musculoesquelético, incluyendo los huesos, músculos, tendones y ligamentos.</p>
                        <p>Desempeña un papel fundamental en el manejo de emergencias médicas, como fracturas graves, lesiones deportivas y accidentes automovilísticos.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-4.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-10">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Otorrinolaringología</h3>
                        <p class="fst-italic">Es una especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades y trastornos relacionados con el oído, la nariz, la garganta y estructuras asociadas.</p>
                        <p>Los otorrinolaringólogos son expertos en el manejo de afecciones auditivas, respiratorias y vocales, y desempeñan un papel crucial en el cuidado de la salud de estas áreas del cuerpo. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-5.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br></br><br></br>
            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-11">Dermatología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-12">Medicina Interna</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-13">Tomografía</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-14">Nutrición</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-15">Neumología</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-11">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Dermatología</h3>
                        <p class="fst-italic">Es la especialidad encargada del diagnóstico y tratamiento de las enfermedades relacionadas con la piel, cabello, uñas y mucosas. </p>
                        <p> Los dermatólogos utilizan diferentes herramientas y técnicas para evaluar y diagnosticar las enfermedades de la piel, como la observación visual. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={departments3} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-12">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Medicina Interna</h3>
                        <p class="fst-italic">Es una especialidad médica que se enfoca en el diagnóstico, tratamiento y manejo de enfermedades en adultos. </p>
                        <p>  Los internistas son expertos en el manejo integral de pacientes con condiciones médicas complejas, y trabajan para mejorar la salud y bienestar de sus pacientes a través de evaluaciones precisas, planes de tratamiento personalizados y atención centrada en el paciente.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-2.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-13">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Tomografía</h3>
                        <p class="fst-italic">Es una técnica de diagnóstico médico que permite obtener imágenes detalladas del interior del cuerpo humano. </p>
                        <p>Utiliza rayos X y una computadora para generar imágenes transversales de alta resolución de los órganos, tejidos y estructuras internas del cuerpo. </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-3.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-14">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Nutrición</h3>
                        <p class="fst-italic">En la medicina, la nutrición se utiliza tanto para prevenir enfermedades como para tratarlas. </p>
                        <p>Los profesionales médicos brindan asesoramiento nutricional personalizado para ayudar a los pacientes a optimizar su salud a través de una alimentación adecuada y adaptada a sus necesidades individuales.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-4.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-15">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Neumología</h3>
                        <p class="fst-italic">Es la especialidad que se encarga del diagnóstico y tratamiento de las enfermedades relacionadas con los pulmones y el sistema respiratorio.</p>
                        <p>La Neumología es la especialidad médica cuyo campo de actuación se centra en la prevención, diagnóstico y tratamiento de las enfermedades del aparato respiratorio y, de forma más específica, a los pulmones, el mediastino y la pleura.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-5.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br></br><br></br>
            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-16">Cirugía general</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-17">Endocrinología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-18">Urología</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-19">Resonancia Magnética</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-20">Reumatología</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-16">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Cirugía general</h3>
                        <p class="fst-italic">Es una especialidad médica que se enfoca en el diagnóstico y tratamiento de diversas condiciones quirúrgicas en pacientes de todas las edades. </p>
                        <p> Los cirujanos generales están capacitados para realizar procedimientos quirúrgicos, brindar atención preoperatoria y postoperatoria.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={departments4} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-17">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Endocrinología</h3>
                        <p class="fst-italic">Es una especialidad médica que se dedica al estudio y tratamiento de las enfermedades relacionadas con las glándulas endocrinas y los desequilibrios hormonales en el cuerpo.</p>
                        <p>Los endocrinólogos desempeñan un papel crucial en el manejo de condiciones como la diabetes, los trastornos de la tiroides y otros desequilibrios hormonales.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-2.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-18">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Urología</h3>
                        <p class="fst-italic">Es una especialidad médica que se enfoca en el diagnóstico y tratamiento de las enfermedades y trastornos del sistema urinario en hombres y mujeres, así como de los órganos reproductivos masculinos.</p>
                        <p>Los urólogos desempeñan un papel crucial en el manejo de una amplia variedad de condiciones, utilizando una combinación de terapia médica, procedimientos y cirugía para mejorar la salud urológica de los pacientes.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-3.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-19">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resonancia Magnética</h3>
                        <p class="fst-italic">Es una técnica de diagnóstico por imágenes que utiliza campos magnéticos y ondas de radio para obtener imágenes detalladas del interior del cuerpo.</p>
                        <p>Es una herramienta versátil que se utiliza para diagnosticar y evaluar una amplia variedad de condiciones médicas, proporcionando información precisa y detallada sobre los tejidos y las estructuras internas.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-4.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-20">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Reumatología</h3>
                        <p class="fst-italic">Es una especialidad médica que se encarga del diagnóstico y tratamiento de las enfermedades que afectan al sistema musculoesquelético y al tejido conectivo.</p>
                        <p>Los reumatólogos son expertos en el manejo de enfermedades como la artritis, la osteoartritis, el lupus y la fibromialgia, brindando tratamientos individualizados para mejorar la calidad de vida de los pacientes.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="../../img/departments-5.jpg" alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
    </section >

    <section id="doctors" class="doctors">
      <div class="container">

        <div class="section-title">
          <h2>Doctores</h2>
          <p>Contamos con un equipo de profesionales altamente calificados y comprometidos con la excelencia en servicios médicos.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src={doctors1} class="img-fluid" alt=""/>
                </div>
              <div class="member-info">
                <h4>Orlando Palacios </h4>
                <span>Neurología</span>
                <p>CMP: 02596</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doctors3} class="img-fluid" alt=""/>

              </div>
              <div class="member-info">
                <h4>Carlos Morillo</h4>
                <span>Otorrininolaringologia</span>
                <p>CMP: 0364</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doctors2} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Luna Tome</h4>
                <span>Cardiología</span>
                <p>CMP: 4862</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doctors4} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Saray Robledo</h4>
                <span>Oftalmologia</span>
                <p>CMP: 13593</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>



          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doctors1} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Axel Bautista</h4>
                <span>Gastroenterologia</span>
                <p>CMP: 96435</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src={doctors3} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>Tomas Córdoba</h4>
                <span>Traumatología</span>
                <p>CMP: 95634</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="gallery" class="gallery">
      <div class="container">
        <div class="section-title">
          <h2>Galería</h2>
          <p>Nuestra mejor colección de fotos de nuestras actividades y funciones.</p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row g-0">

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery1} class="galelry-lightbox">
                <img src={gallery1} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery2} class="galelry-lightbox">
                <img src={gallery2} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery3} class="galelry-lightbox">
                <img src={gallery3} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery4} class="galelry-lightbox">
                <img src={gallery4} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery5} class="galelry-lightbox">
                <img src={gallery5} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery6} class="galelry-lightbox">
                <img src={gallery6} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery7} class="galelry-lightbox">
                <img src={gallery7} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="gallery-item">
              <a href={gallery8} class="galelry-lightbox">
                <img src={gallery8} alt="" class="img-fluid"/>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Contacto</h2>
          <p>Nuestros ejecutivos especializados atenderán tus dudas, recibirán tus comentarios y te brindarán el servicio que requieras</p>
        </div>
      </div>

      <div class="container">
        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Ubicación:</h4>
                <p>Av. Canaval Moreira 450 - San Isidro</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>medicline@clinica.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Teléfono:</h4>
                <p>+51 913 919 998</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>

        </main >
        </div >
    );

}
export default HomePaciente;