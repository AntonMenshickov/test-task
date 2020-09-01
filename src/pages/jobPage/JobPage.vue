<template>
  <div id="jobPage">
    <router-link to="/" class="back-to-jobs-list">← Back to jobs list</router-link>
    <template v-if="job !== null">
      <h1>
        {{job.title}}
        <div class="subtitle">
          {{`${job.location} / ${job.type}`}}
          <div class="created">{{job.created_at | diffForHumans}}</div>
        </div>
      </h1>
      <div class="job-content">
        <div class="job-description" v-html="job.description"></div>
        <div class="company-info">
          <div class="company-name">{{job.company}}</div>
          <img
            v-if="job.company_logo"
            :src="job.company_logo"
            :alt="job.company"
            class="company-logo"
          />
          <a :href="job.company_url" class="company-url">{{job.company_url}}</a>
          <div class="how-to-apply-label">How to apply:</div>
          <div class="how-to-apply" v-html="job.how_to_apply"></div>
        </div>
      </div>
    </template>
    <div v-if="job === null" class="loading">Loading...</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import position from "../../utils/position";

export default {
  name: "JobPage",
  created() {
    dayjs.extend(relativeTime);
    position(this.$route.params.id).then((position) => {
      this.job = position[0];
    });
  },
  data() {
    return {
      job: null,
    };
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
<style scoped src="./jobPage.scss" lang="scss"></style>
