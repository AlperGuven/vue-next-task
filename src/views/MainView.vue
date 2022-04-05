<template>
    <Header headerText="Header" />
    <div class="container-fluid">
        <div class="row">
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import { mapActions } from "vuex";
export default {
  name: "MainView",
  components: {Header},
  data() {
    return {
      loading: false,

    }
  },
  methods: {
    ...mapActions(["fetchEvents", "changeName"]),
    async getEvents() {
      await this.fetchEvents('https://app.ticketmaster.com/discovery/v2/events.json?size=1');
    },
  },
 async created() {
    await this.getEvents();
  },
}
</script>
<style >
</style>