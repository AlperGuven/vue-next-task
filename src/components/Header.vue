<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img class="tarfin-logo" alt="Tarfin logo" src="https://tarfin.com/img/logo.svg" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link header-text" href="/">{{headerText}}</a>
      </li>
      <li class="nav-item" v-if="isBackactive">
        <router-link :to="{ name: 'Main' }" class ="btn btn-outline-info navbar-back-button">Back</router-link>
      </li>
    </ul>
  </div>
</nav>
  
</template>

<script>
export default {
  name: "Header",
  props: {
    headerText: {
       type:String,
    },
    isBackactive: {
        type:Boolean,
        default: false,
    }
  },
  data() {
      return {
      }
  },
  methods: {
  },
  mounted() {
  }
};
</script>
<style >
</style>