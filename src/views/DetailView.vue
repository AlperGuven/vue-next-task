<template>
    <Header headerText="Detail Page" :isBackactive="isBack" />
    <div class="container-fluid">
        <div class="row">
            <Event :eventData="eventDetail" />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Event from '../components/Event.vue';
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MainView",
  components: {Header, Event},
  data() {
    return {
        loading: false,
        isBack: true,
    }
  },
  computed: {
    ...mapGetters(["eventDetailData"]),
    eventDetail() {
      return this.eventDetailData;
    },
  },
  methods: {
  },
  mounted() {
  },
}
</script>
<style >
</style>