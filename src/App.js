import React from "react";
import ListPacientesComponet from './componets/paciente/ListPacientesComponet';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderComponent from './componets/paciente/HeaderComponent';
import CreateUsuarioComponet from './componets/login/CreateUsuarioComponet';
import Login from './componets/login/LoginComponet';
import HomePaciente from './componets/principal/HomePaciente';
import { FooterComponet } from "./componets/paciente/FooterComponet";
import Home from "./componets/principal/Home";
import validateToken from "./helpers/validateToken";
import HomeDoctor from "./componets/principal/HomeDoctor";
import AddDoctorComponet from "./componets/doctor/AddDoctorComponent";
import ListDoctoresComponet from "./componets/doctor/ListDoctoresComponent";
import AddPacienteComponet from "./componets/paciente/AddPacienteComponet";
import AddMedhistoryComponet from "./componets/MedHistory/AddMedhistoryComponent";



function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/create-usuario' element={<CreateUsuarioComponet />}></Route>
            <Route exact path='/home-paciente' element={<HomePaciente />}></Route>
            <Route path='/add-paciente' element={<AddPacienteComponet />}></Route>
            <Route path='/add-medhistory' element={<AddMedhistoryComponet />}></Route>



          <Route
            path='/home-doctor'
            element={<HomeDoctor />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/paciente-doctor'
            element={<ListPacientesComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/edit-paciente/:id'
            element={<AddPacienteComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/doctores'
            element={<ListDoctoresComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/add-doctor'
            element={<AddDoctorComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          <Route
            path='/edit-doctor/:id'
            element={<AddDoctorComponet />}
            onEnter={validateToken} // Llama a validateToken al ingresar a la ruta
          />
          </Routes>
        <FooterComponet/>
      </BrowserRouter>
    </div>
  );
}

export default App;