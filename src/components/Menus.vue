<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">내 스케쥴</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/schedule">내스케쥴</b-nav-item>
        <a href="" v-if="isAuthenticated" @click.prevent="onClickLogout">Logout</a>
        <b-nav-item href="/login" v-else>Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import store from "../store";

export default {
  computed: {
    isAuthenticated() {
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    onClickLogout() {
      store.dispatch("LOGOUT").then(() => this.$router.push("/"));
    }
  }
};
</script>

<style scope>
</style>
