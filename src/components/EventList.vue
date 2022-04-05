<template>
    <div class="event-list">
      <p>Alper</p>
    </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    eventList:{
      type: Array
    },
    header: {
       type:String,
    }
  },
  data() {
    return {
      loading: false,   
    }
  },
  methods: {
    
  },
  mounted() {
  }
};
</script>
<style >
img {
  width: 300px;
}
</style>