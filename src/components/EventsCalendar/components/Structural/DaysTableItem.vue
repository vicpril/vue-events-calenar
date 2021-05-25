<template lang="">
  <div
    class="date__wrapper"
    :class="[isPrevDate ? 'prev-date' : '', isToday ? 'today' : '']"
  >
    <div class="date__inner">
      <div class="date__header" :class="dateClass">
        {{ date }}
      </div>
      <div class="date__body">
        <div class="events__list" v-if="events.length">
          <EventBadge
            v-for="event in events"
            :key="event.id"
            :event="event"
          ></EventBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBadge from "./EventBadge";
export default {
  components: { EventBadge },
  inject: ["sortedEvents"],
  props: {
    day: Date,
    currentMonth: Date,
  },
  data() {
    return {
      height: 0,
    };
  },
  computed: {
    date() {
      return this.day.getDate();
    },
    today() {
      return new Date();
    },
    isToday() {
      return this.today.toLocaleDateString() === this.day.toLocaleDateString();
    },
    isHoliday() {
      return this.day.getDay() === 6 || this.day.getDay() === 0;
    },
    isPrevDate() {
      const today = new Date();
      const yesterday = today.setDate(today.getDate() - 1);
      return this.day < yesterday;
    },
    dateClass() {
      if (this.isToday) return "date-today";
      if (this.isHoliday) return "date-holiday";
      if (this.isPrevDate) return "date-prev-date";
      return "";
    },
    events() {
      const events = this.sortedEvents[this.day.toLocaleDateString()] || [];
      const sortByDate = (a, b) => new Date(a.date) - new Date(b.date);
      return events.sort(sortByDate);
    },
  },
  methods: {
    countMonths(date) {
      return 12 * date.getFullYear() + date.getMonth();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.date__wrapper {
  background-color: $bg_color_primary;
  border: 1px solid $bg_color_disabled;
  border-radius: 0.5rem;
  width: 100%;
  padding-top: 90%;
  position: relative;

  &.prev-date {
    background-color: $bg_color_disabled;
  }
  &.today {
    border-color: $text_color_disabled;
  }
}

.date__inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5px;
}

.date__header {
  text-align: right;
  font-weight: bold;

  color: $text_color_primary;

  &.date-today {
    color: $text_color_success;
  }
  &.date-holiday {
    color: $text_color_holidays;
  }
  &.date-prev-date {
    color: $text_color_disabled;
  }
}
</style>
