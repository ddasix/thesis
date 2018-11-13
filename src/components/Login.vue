<template>
  <div>
    <h2>로그인</h2>
    <!-- <b-form @submit.prevent="onSubmit(email, password)">
      <b-form-group id="emailGroup" label="Email address:" label-for="email" description="이메일 형식의 아이디.">
        <b-form-input id="email" type="text" v-model="email" placeholder="아이디" required></b-form-input>
      </b-form-group>
      <b-form-group id="passwordGroup" label="password:" label-for="password">
        <b-form-input id="password" type="password" v-model="password" placeholder="Password"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <p><i>{{msg}}</i></p> -->
    <hr>
    <b-button type="button" variant="primary" @click="loginGoogle()">google로 로그인</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: ""
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch("LOGIN", { email, password })
        .then(() => this.redirect())
        .catch(({ message }) => (this.msg = message));
    },
    redirect() {
      const { search } = window.location;
      const tokens = search.replace(/^\?/, "").split("&");
      const { returnPath } = tokens.reduce((qs, tkn) => {
        const pair = tkn.split("=");
        qs[pair[0]] = decodeURIComponent(pair[1]);
        return qs;
      }, {});
      this.$router.push(returnPath);
    },
    loginGoogle() {
      alert();
    }
  }
};
</script>

<style scope>
</style>
