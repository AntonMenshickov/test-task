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
    <JobsList :jobs="jobs"></JobsList>
  </div>
</template>

<script>
import JobsList from "../../components/jobsList/JobsList";
import positions from "../../utils/request";
import jobs from "../../utils/jobs.json";

positions("python").then(console.log);

export default {
  name: "Home",
  components: {
    JobsList,
  },
  data() {
    return {
      jobs,
    };
  },
  methods: {
    submitForm: (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      console.debug(
        fd.get("descritpion"),
        fd.get("location"),
        fd.get("fulltime")
      );
    },
  },
};
</script>
<style scoped src="./home.scss" lang="scss"></style>
