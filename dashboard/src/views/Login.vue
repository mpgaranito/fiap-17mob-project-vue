 

<template>
  <div>
    <b-form v-if="show">
      <b-form-group id="input-group-1" label="Email address:" label-for="email" description>
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="password">
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-button type="button" variant="primary" @click="login()">Login</b-button>
      <b-button type="button" variant="default">Register</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },

      show: true
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(function(firebaseUser) {
          window.location = "home"; // Success, redirect, window location, please, replace to this.$router.replace('home')
        })
        .catch(function(error) {
          // Error Handling
          var errorCode = error.code;
          var errorMessage = error.message;
          //alert(errorCode);
          alert(errorMessage);
          return false;
        });
    }
  }
};
</script>