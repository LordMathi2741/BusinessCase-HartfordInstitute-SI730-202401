import axios from 'axios';

export class ExaminersService {
    getAll(){
        return axios.get('http://localhost:3000/api/v1/examiners');
    }
}