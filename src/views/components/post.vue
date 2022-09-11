<template>
  <div class="card mx-4" id="top">
    <div class="card-header pb-0 mb-3">
      <h3>Post User</h3>
    </div>
    <div class="card-body px-3 pt-0 pb-2">
      <div class="mb-3">
        <label
          for="Name"
          class="form-label fs-5 text-uppercase font-weight-bolder opacity-7"
          >Name</label
        >
        <input type="text" class="form-control" id="Name" v-model="name" />
      </div>
      <div class="mb-3">
        <label
          for="Job"
          class="form-label fs-5 text-uppercase font-weight-bolder opacity-7"
          >Job</label
        >
        <input type="text" class="form-control" id="Job" v-model="job" />
      </div>
      <button @click="post()" class="btn btn-primary">Submit</button>
      <div id="name"></div>
      <div id="job"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      name: "",
      errors: [],
    };
  },

  methods: {
    post() {
      axios
        .post("https://reqres.in/api/users", {
          name: this.name,
          job: this.job,
        })
        .then((response) => {})
        .catch((e) => {
          this.errors.push(e);
        });

      document.getElementById("name").innerHTML =
        '<div class="fs-4">Name : ' + this.name + "</div>";
      document.getElementById("job").innerHTML =
        '<div class="fs-4">Job : ' + this.job + "</div>";
    },
  },
};
</script>