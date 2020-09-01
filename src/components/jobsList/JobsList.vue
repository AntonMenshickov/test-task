<template>
  <div id="jobsList">
    <div v-for="(item) of jobs" v-bind:key="item.id">
      <JobsListItem :job="item"></JobsListItem>
    </div>
  </div>
</template>

<script>
import JobsListItem from "../JobsListItem/JobsListItem";

export default {
  name: "JobsList",
  props: {
    jobs: Array,
  },
  components: {
    JobsListItem,
  },
  created() {
    console.debug(this.jobs);
  },
};
</script>

<style scoped src="./jobsList.scss" lang="scss"></style>