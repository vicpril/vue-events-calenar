<template>
  <EventsCalendar :events="events"></EventsCalendar>
</template>

<script>
import EventsCalendar from "./components/EventsCalendar/EventsCalendar";
import events from "./models/events";

export default {
  name: "App",
  components: { EventsCalendar },
  data() {
    return {
      events: events,
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
}
</style>
