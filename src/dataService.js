import axios from 'axios';

const apiUrl = 'http://localhost:9000/api/';

const config = {
  responseType: 'json',
  auth: { username: 'user', password: 'user' },
  withCredentials: true
};

const dataService = {
    getTimeRecords(count) {
      return axios.get(apiUrl + 'timerecord/GetAll?count=' + count, config);
    },
    setTimeRecord(newTimeRecord) {
      return "";
    }
};

export default dataService;
