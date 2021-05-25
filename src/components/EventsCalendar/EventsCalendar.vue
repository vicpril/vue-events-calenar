<template>
  <div class="calendar__wrapper">
    <TheHeader></TheHeader>
    <DaysTable></DaysTable>
  </div>
</template>

<script>
import TheHeader from "./components/Structural/TheHeader";
import DaysTable from "./components/Structural/DaysTable";

export default {
  components: {
    TheHeader,
    DaysTable,
  },
  props: {
    events: Array,
  },
  computed: {
    sortedEvents() {
      const result = {};
      this.events.forEach((event) => {
        const dateTime = new Date(event.date);
        result[dateTime.toLocaleDateString()] =
          result[dateTime.toLocaleDateString()] || [];
        result[dateTime.toLocaleDateString()].push(event);
      });
      return result;
    },
  },
  provide() {
    return {
      sortedEvents: this.sortedEvents,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/variables";

.calendar__wrapper {
  display: inline-block;
  background-color: $bg_color_primary;
  border-radius: 30px;
  padding: 30px;
  color: $text_color_primary;
  margin: 20px;
  width: 800px;
  font-family: sans-serif;
}
</style>
