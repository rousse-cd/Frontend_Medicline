import axios from "axios";

const PACIENTE_API_URL = "http://localhost:8030/api/pacientes";
 
class PacienteService {

    getAllPacientes() {
        return axios.get(PACIENTE_API_URL);
    }

    createPaciente(paciente) {
        return axios.post(PACIENTE_API_URL, paciente);
    }

    getPacienteById(pacienteId) {
        return axios.get(PACIENTE_API_URL + '/' + pacienteId);
    }

    updatePaciente(pacienteId, paciente) {
        return axios.put(PACIENTE_API_URL + '/' + pacienteId, paciente);
    }

    deletePaciente(pacienteId) {
        return axios.delete(PACIENTE_API_URL + '/' + pacienteId);
    }
}

export default new PacienteService();