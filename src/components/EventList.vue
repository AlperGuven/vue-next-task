<template>
  <div class="event-list">
    <div class="event-list__main">
      <h1 class="event-list__main__header-element">
        {{ header }}
      </h1>
      <div
        class="event-list__main__event-card"
        :key="index"
        v-for="(event, index) in eventList"
      >
        <div class="event-list__main__event-card--item mar-bt-10">
          <div class="event-list__main__event-card--item__body">
            <p class="event-list__main__event-card--item__body--title">
              Event Name: {{ event.name }}
            </p>
            <div
              class="event-list__main__event-card--item__body--content"
            >
              <table class="table table-striped table-bordered text-center">
                <tbody>
                  <tr v-if="event.promoters">
                    <th scope="row">promoter</th>
                    <td><span>{{event.promoters[0].name}}</span></td>
                    <td>{{event.promoters[0].description}} </td>
                  </tr>
                  <tr :key="index" v-for="(date, index) in shortDateArray(event)">
                      <th scope="row">Dates</th>
                      <td><span>Status: </span><span class="uppercase">{{date.status}}</span></td>
                      <td><span>Time: {{date.localDate}} - </span>{{date.localTime}}</td>
                  </tr>
                  <tr :key="index" v-for="(restriction, index) in event.ageRestrictions">
                    <th scope="row">Restriction</th>
                    <td>Age Restriction</td>
                    <td>{{restriction ? 'Yes' : 'No'}}</td>
                  </tr>
                  <tr :key="index" v-for="(accessibility, index) in showAccessibility(event)">
                    <th scope="row">Accessibility</th>
                    <td><span>Ticket Limit:</span> </td>
                    <td>{{accessibility.ticketLimit}}</td>
                  </tr>
                  <tr :key="index" v-for="(price, index) in event.priceRanges">
                    <th scope="row">Prices</th>
                    <td><span>{{price.currency}}</span> min: {{price.min}}</td>
                    <td><span>{{price.currency}}</span> max: {{price.max}}</td>
                  </tr>
                  <tr>
                    <th scope="row">For Event Details</th>
                    <td><button type="button" class="btn btn-sm btn-secondary" @click="detailViewChanger(event.id)">
                      Details
                    </button>
                    </td>
                    <td>To See Event Details click on left side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EventList",
  props: {
    eventList: {
      type: Array,
    },
    header: {
      type: String,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    
  },
  methods: {
    ...mapActions(["getEventDetail"]),
    shortDateArray (event) {
      return [{localDate : event.dates.start.localDate, localTime: event.dates.start.localTime, status: event.dates.status.code}]
    },
    showAccessibility(event) {
      if(event.accessibility) {
        return [{accessibility : event.accessibility, ticketLimit: event.accessibility.ticketLimit}]
      }
      return [];
    },
    detailViewChanger(eventId) {
      this.getEventDetail(eventId).then((response) => {
          this.$router.push(`/event/${eventId}`);
      }).catch((error) => {
        console.error(error);
      });
    }
  },
  mounted() {},
};
</script>
<style >
</style>