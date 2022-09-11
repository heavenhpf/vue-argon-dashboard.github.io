<template>
  <div class="card mx-4" id="top">
    <div class="card-header pb-0">
      <h3>Delete User</h3>
    </div>
    <div class="card-body px-3 pt-0 pb-2">
      <button @click="deleteUser" class="btn btn-primary mt-3">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async deleteUser() {
      let x = window.confirm("You want to delete the user?");

      if (x) {
        const user = await axios.delete("https://reqres.in/api/users/2");

        console.log(user);
        alert("User deleted!");
      }
    },
  },
};
</script>