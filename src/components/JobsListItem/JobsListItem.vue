<template>
  <div class="link-wrapper">
    <router-link :to="'/'+job.id">
      <div class="job-item">
        <div class="job-title">{{job.title}}</div>
        <div class="job-location">{{job.location}}</div>
        <div class="job-company">
          {{job.company}}
          <div class="job-type">- {{job.type}}</div>
        </div>
        <div class="job-created">{{job.created_at | diffForHumans}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  name: "JobsListItem",
  created() {
    dayjs.extend(relativeTime);
  },
  props: {
    job: Object,
  },
  filters: {
    diffForHumans: (date) => {
      if (!date) {
        return null;
      }

      return dayjs(date).fromNow();
    },
  },
};
</script>

<style scoped src="./jobsListItem.scss" lang="scss"></style>