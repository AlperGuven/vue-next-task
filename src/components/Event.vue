<template>
<div class="event-detail">
    {{eventData}}
</div>
  
</template>

<script>
export default {
  name: "Event",
  props: {
    eventData: {
       type: Object,
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