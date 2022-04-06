<template>
    <Header headerText="List Page" />
    <div class="container-fluid">
        <div class="row">
            <EventList header="List of Events" :eventList="events" />
        </div>
        <div class="row">
            <EventTools />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import EventList from '../components/EventList.vue';
import EventTools from '../components/EventTools.vue';
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MainView",
  components: {Header, EventList, EventTools},
  data() {
    return {
        loading: false,
        get_event_url: 'https://app.ticketmaster.com/discovery/v2/',
    }
  },
  computed: {
    ...mapGetters(["eventData"]),
    events() {
      return this.eventData;
    },
  },
  methods: {
    ...mapActions(["fetchEvents", "changeName"]),
    async getEvents() {
      await this.fetchEvents(this.get_event_url);
    },
  },
 async mounted() {
    await this.getEvents();
  },
}
</script>
<style >
</style>