import axios from "axios";

const MEDHISTORY_API_URL = "http://localhost:8030/api/pacientesHis";
 
class MedhistoryService {

    getAllMedhistory() {
        return axios.get(MEDHISTORY_API_URL);
    }

    createMedhistory(medhistory) {
        return axios.post(MEDHISTORY_API_URL, medhistory);
    }

    getMedhistoryById(medhistoryId) {
        return axios.get(MEDHISTORY_API_URL + '/' + medhistoryId);
    }

    updateMedhistory(medhistoryId, medhistory) {
        return axios.put(MEDHISTORY_API_URL + '/' + medhistoryId, medhistory);
    }

    deleteMedhistory(medhistoryId) {
        return axios.delete(MEDHISTORY_API_URL + '/' + medhistoryId);
    }
}

export default new MedhistoryService();