<template>
  <div id="jobsList">
    <div v-for="(item) of jobs" v-bind:key="item.id">
      <JobsListItem :job="item"></JobsListItem>
    </div>
    <div v-if="jobs.length === 0 && !loading">No Jobs found</div>
    <div v-if="loading">Loading...</div>
  </div>
</template>

<script>
import JobsListItem from "../JobsListItem/JobsListItem";

export default {
  name: "JobsList",
  props: {
    jobs: Array,
    loading: Boolean,
  },
  components: {
    JobsListItem,
  },
};
</script>

<style scoped src="./jobsList.scss" lang="scss"></style>