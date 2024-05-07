import axios from 'axios';

export class ExamResultsService {
    getAll(){
        return axios.get('http://localhost:3000/api/v1/mental-state-exams');
    }
}