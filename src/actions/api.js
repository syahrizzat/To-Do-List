import axios from "axios";

const baseUrl = "https://localhost:7253/api/"



export default {

    dCandidate(url = baseUrl + 'Dcandidates/') {
        console.log(url)
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}