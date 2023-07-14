import axios from "axios";

const DOCTOR_API_URL = "http://localhost:8030/api/doctor";

class DoctorService {

    getAllDoctores() {
        return axios.get(DOCTOR_API_URL);
    }

    createDoctor(doctor) {
        return axios.post(DOCTOR_API_URL, doctor);
    }

    getDoctorById(doctorId) {
        return axios.get(DOCTOR_API_URL + '/' + doctorId);
    }

    updateDoctor(doctorId, doctor) {
        return axios.put(DOCTOR_API_URL + '/' + doctorId, doctor);
    }

    deleteDoctor(doctorId) {
        return axios.delete(DOCTOR_API_URL + '/' + doctorId);
    }
}

export default new DoctorService();