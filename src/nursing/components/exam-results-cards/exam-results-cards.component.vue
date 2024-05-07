<script>
import {PatientsService} from '@/shared/services/patients/patients.service.js'
import {ExaminersService} from '@/shared/services/examiners/examiners.service.js'
import { Patient } from '@/nursing/models/patient-model/patient.entity.js'
import { Examiner } from '@/nursing/models/examiners-model/examiner.entity.js'
import { ExamResultsService } from '@/nursing/service/exams-results/exams-results.service.js'
import { MentalStateExam } from '@/nursing/models/mental-state-exams-model/mental-state-exams.entity.js'


export default {
  name: 'exam-results-cards',
  data() {
    return {
      patientData: null,
      examinerData: null,
      examResultsData: null,
      examsResults: [],
      examiners: [],
      patients: [],
      examsByPatient:[],
      patientService: new PatientsService(),
      examinerService: new ExaminersService(),
      examResultService: new ExamResultsService()
    }
  },
  methods: {
    async getPatients() {
      await this.patientService.getAll().then((response) => {
        response.data.forEach((patient) => {
          const { id, firstName, lastName, photoUrl, birthDate } = patient;
          this.patientData = new Patient(id, firstName, lastName, photoUrl, birthDate);
          this.patients.push(this.patientData);
        });
      })
    },
    async getExaminers() {
      await this.examinerService.getAll().then((response) => {
        response.data.forEach((examiner) => {
          const { id, firstName, lastName, nationalProviderIdentifier } = examiner;
          this.examinerData = new Examiner(id, firstName, lastName, nationalProviderIdentifier);
          this.examiners.push(this.examinerData);
        });
      })
    },
    async getExamResults() {
      await this.examResultService.getAll().then((response) => {
        response.data.forEach((mentalStateExam) => {
          const { id, patientId, examinerId, examDate, orientationScore, registrationScore, attentionAndCalculationScore, recallScore, languageScore } = mentalStateExam;
          this.examResultsData = new MentalStateExam(id, patientId, examinerId, examDate, orientationScore, registrationScore, attentionAndCalculationScore, recallScore, languageScore);
          this.examsResults.push(this.examResultsData);
        });
      })
    },

    getExamsByPatient() {
      this.examsResults.filter((exam) => {
        this.patients.filter((patient) => {
          if (exam.patientId === patient.id) {
            this.examsByPatient.push({ patient: patient, exam: exam, examiner: this.examiners.find((examiner) => examiner.id === exam.examinerId) });
          }
        });
      });
    },

    getTotalScore(examId){
      const score = this.examsResults.find((exam) => exam.id === examId);
      return Number(score.orientationScore )+ Number(score.registrationScore) + Number(score.attentionAndCalculationScore) + Number(score.recallScore) + Number(score.languageScore);
    },
    async catchData(){
      await this.getPatients();
      await this.getExaminers();
      await this.getExamResults();
    }
  },
  created() {
    this.catchData().then(() => {
      this.getExamsByPatient();
    })
  }
}
</script>

<template>
  <div v-for="(exam,index) in examsByPatient" :key="index" class="flex justify-content-center" aria-label="The cards container">
    <pv-card aria-label="The card content">
      <template #title> <img :src="exam.patient.photoUrl" width="400"> </template>
      <template #content>
        <p class="m-0" aria-label="Patient Name"> {{$t('patientName')}}: {{exam.patient.firstName + ' ' + exam.patient.lastName}}</p>
        <p class="m-0" aria-label="Born Date"> {{$t('bornDate')}}: {{exam.patient.birthDate}}</p>
        <p class="m-0" aria-label="Exam Date"> {{$t('examDate')}}: {{exam.exam.examDate}}</p>
        <p class="m-0" aria-label="Examiner Name">{{$t('examinerName')}}: {{exam.examiner.firstName + ' ' + exam.examiner.lastName}}</p>
        <p class="m-0" aria-label="Examiner National Provider"> {{$t('examinerNationalProvider')}}: {{exam.examiner.nationalProviderIdentifier}}</p>
        <p class="m-0" aria-label="Total score"> {{$t('totalScore')}}: {{getTotalScore(exam.exam.id)}}</p>
      </template>
    </pv-card>
  </div>

</template>

<style scoped>

</style>