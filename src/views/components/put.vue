<template>
    <div class="card mx-4" id="top">
      <div class="card-header pb-0 mb-3">
        <h3>Put User</h3>
      </div>
      <div class="card-body px-3 pt-0 pb-2">
        <div class="mb-3">
          <label
            for="name"
            class="form-label fs-5 text-uppercase font-weight-bolder opacity-7"
            >Name</label
          >
          <input type="text" class="form-control" id="name" v-model="name" />
        </div>
        <div class="mb-3">
          <label
            for="job"
            class="form-label fs-5 text-uppercase font-weight-bolder opacity-7"
            >Job</label
          >
          <input type="text" class="form-control" id="job" v-model="job" />
        </div>
        <button @click="update()" class="btn btn-primary">Submit</button>
        <div id="name"></div>
        <div id="job"></div>
      </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios';
    export default {
        data() {
            return {
                name: '',
                job: ''
            }
        },
        methods: {
            async update() {
                try {
                    const user = await axios.put(
                        "https://reqres.in/api/users/2",
                        {
                            name: this.name,
                            job: this.job,
                        }
                    );
                    console.log(user);
                    alert("User updated!");
                } catch (e) {
                    console.log(e);
                }
            }
        },
    }
    </script>