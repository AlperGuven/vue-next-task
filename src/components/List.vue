<template>
  <img alt="Tarfin logo" src="https://tarfin.com/img/logo.svg" />
</template>

<script>
export default {
  name: "List",
  data() {
      return {
          api_key: import.meta.env.VITE_API_KEY, 
      }
  },
  methods: {
    show() {
      console.log(this.api_key);
    }
  },
  mounted() {
    this.show();
  }
};
</script>
<style >
img {
  width: 300px;
}
</style>