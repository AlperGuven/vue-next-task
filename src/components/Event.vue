<template>
<div class="event-detail">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="event-info-box mt-0">
                    <h5>{{eventData.name}}</h5>
                    <p class="mb-0">{{getNote}}</p>
                </div>
                <div class="event-info-box" :key="index" v-for="(detail, index) in eventData._embedded.venues">
                    <p><b>Where:</b> {{detail.name}}</p>
                    <p><b>City:</b> {{detail.city.name}}</p>
                    <p><b>Ticket:</b> {{eventData.url}}</p>
                    <p class="mb-0 uppercase"><b>Sale Satus:</b> {{eventData.dates.status.code}}</p>
                    <div v-if="eventData._embedded.attractions">
                        <div class="event-info-box artist-part" :key="index" v-for="(attraction, index) in eventData._embedded.attractions">
                            <p><b>Artist:</b> {{attraction.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <img :src=getEventImage[0].url alt="event-image" class="rounded event-image">
            </div>
        </div>
    </div>
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
  computed:{
      getEventImage() {
        return this.eventData.images.filter( image => image.width >= 300 && image.ratio === '4_3')
      },
      getNote(){
          return this.eventData.pleaseNote ? this.eventData.pleaseNote : 'Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.';
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