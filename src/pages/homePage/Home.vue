<template>
  <div id="app">
    <h1>Jobs list</h1>
    <form id="searchForm" @submit="submitForm">
      <label class="label">
        Job description
        <div class="field">
          <input type="text" placeholder="description" name="descritpion" />
        </div>
      </label>
      <label class="label">
        Job location
        <div class="field">
          <input type="text" placeholder="location" name="location" />
        </div>
      </label>
      <label class="label-checkbox">
        <input type="checkbox" class="fulltime" name="fulltime" /> Full time
      </label>
      <button type="submit" class="submit-button">Search</button>
    </form>
    <JobsList :jobs="jobs" :loading="loading"></JobsList>
    <button class="load-more" @click="loadMore">load more</button>
  </div>
</template>

<script>
import JobsList from "../../components/jobsList/JobsList";
import positions from "../../utils/request";

export default {
  name: "Home",
  components: {
    JobsList,
  },
  created() {
    positions().then((positions) => {
      this.jobs = positions;
      this.loading = false;
    });
  },
  data() {
    return {
      jobs: [],
      loading: true,
      description: null,
      location: null,
      fulltime: false,
      page: 0,
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      const fd = new FormData(e.target);
      this.description = fd.get("descritpion");
      this.location = fd.get("location");
      this.fulltime = !!fd.get("fulltime");
      this.page = 0;
      this.loading = true;
      positions(this.description, this.location, this.fulltime, this.page).then(
        (positions) => {
          this.jobs = positions;
          this.loading = false;
        }
      );
    },
    loadMore() {
      this.page++;
      this.loading = true;
      positions(this.description, this.location, this.fulltime, this.page).then(
        (positions) => {
          this.jobs = positions;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style scoped src="./home.scss" lang="scss"></style>
