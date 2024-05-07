<script>
import ExamResultsCards from '@/nursing/components/exam-results-cards.component.vue'

export default {
  name: 'the-results-page.component',
  components: { ExamResultsCards }
}
</script>

<template>
  <h1 class="text-center" aria-label="The mental state exams page title"> {{$t('title')}}</h1>
  <div class="flex flex-wrap gap-7" aria-label="The exam-results-card container">
    <exam-results-cards/>
  </div>
</template>

<style scoped>

</style>