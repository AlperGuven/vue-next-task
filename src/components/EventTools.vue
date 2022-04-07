<template>
  <div class="event-tools">
    <div class="event-tools__event-sort">
      <div class="event-tools__event-sort__dropdown">
        <div
          class="event-tools__event-sort__dropdown__selected"
          @click="toggleDropdown"
        >
          Select Sort
        </div>
        <div
          class="event-tools__event-sort__dropdown__selected__options"
          v-show="isOpen"
        >
          <div
            class="event-tools__event-sort__dropdown__selected__option"
            :key="key"
            v-for="(option, key) in dropdownOptions"
            @click="setOptionFromDropdown(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
    <div class="event-tools__event-search">
      <input
        type="text"
        class="form-control"
        v-model="searchText"
        @input="searchWithDebounce"
        placeholder="Search Event"
      />
    </div>
    <div class="event-tools__event-pagination">
      <button
        type="button"
        class="btn btn-sm btn-outline-danger"
        @click="negativePageCount"
        :disabled="page === 1"
      >
        Prev
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-danger"
        :key="index"
        v-for="(pageNumber, index) in pages"
        @click="pageClicked(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button
        type="button"
        class="btn btn-sm btn-outline-danger"
        v-if="isBiggerStill"
        @click="boundaryClicked"
      >
        ...
      </button>
      <button
        type="button"
        @click="positivePageCount"
        :disabled="!isBiggerStill"
        class="btn btn-sm btn-outline-danger"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import _, { debounce } from "underscore";
export default {
  name: "EventTools",
  data: () => ({
    page: 1,
    perPage: 10,
    pages: [],
    isBiggerStill: false,
    searchText: "",
    debouncedInput: "",
    boundaryPageNumber: 11,
    isOpen: false,
    selected: '',
    dropdownOptions: [
      'Name',
      'Date'
    ]
  }),
  computed: {
    ...mapGetters(["eventData", "getPageData"]),
    allPageData() {
      return this.getPageData;
    },
  },
  methods: {
    ...mapActions(["searchEvent", "paginate", "sortByPayload"]),
    searchWithDebounce: _.debounce(async function (e) {
      // \s matches any whitespace character
      const searchQueryText = e.target.value.replace(/\s/g, "+");
      await this.searchEvent(searchQueryText);
    }, 750),
    setPagesForEvents(pageNumber) {
      this.pages = [];
      if (pageNumber + 10 <= this.allPageData.totalPages) {
        this.boundaryPageNumber = pageNumber + 10;
        for (let index = pageNumber; index < pageNumber + 10; index++) {
          this.pages.push(index);
        }
        this.isBiggerStill = true;
      } else {
        this.isBiggerStill = false;
      }
    },
    async paginateChange(pageNumvber) {
      await this.paginate(pageNumvber);
    },
    async pageClicked(pageNumber) {
      this.page = pageNumber;
      await this.paginateChange(this.page);
    },
    async positivePageCount() {
      this.page++;
      await this.paginateChange(this.page);
    },
    async negativePageCount() {
      this.page--;
      await this.paginateChange(this.page);
    },
    async boundaryClicked() {
      this.page = this.boundaryPageNumber;
      await this.paginateChange(this.page);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    hideDropdown() {
      this.isOpen = false;
    },
    // Set option as    selected state and close dropdown.
    setOptionFromDropdown(option) {
      this.selected = option;
      this.sortByPayload(option);
      this.hideDropdown();
    },
  },
  watch: {
    debouncedInput: async (newVal) => {
      console.log(newVal);
    },
    getPageData: {
      handler: function (newVal, oldVal) {
        console.log(newVal);
        this.setPagesForEvents(this.page);
      },
      deep: true,
    },
  },
  beforeMount() {
    this.setPagesForEvents(this.page);
  },
};
</script>
<style >
</style>