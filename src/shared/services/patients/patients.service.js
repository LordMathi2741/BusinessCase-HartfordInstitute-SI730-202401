import axios from 'axios';

export class PatientsService {
   getAll(){
      return axios.get('http://localhost:3000/api/v1/patients');
   }

}