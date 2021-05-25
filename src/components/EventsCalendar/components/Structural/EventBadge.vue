<template lang="">
  <div :class="['event_badge', eventClass]" @mouseover="show">
    {{ content }}
  </div>
</template>
<script>
export default {
  props: {
    event: Object,
  },
  computed: {
    date() {
      return new Date(this.event.date);
    },
    time() {
      const hh = `0${this.date.getHours()}`.slice(-2);
      const mm = `0${this.date.getMinutes()}`.slice(-2);
      return `${hh}:${mm}`;
    },
    content() {
      return `${this.time} ${this.event.title}`;
    },
    eventClass() {
      switch (this.event.type) {
        case "danger":
          return "event_badge__danger";
        case "warning":
          return "event_badge__warning";

        case "success":
        default:
          return "event_badge__success";
      }
    },
  },
  methods: {
    show(event) {
      console.log("~ event.targe", event.targe);
      event.target.classList.add("hover");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.event_badge {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 3px;
  margin-bottom: 2px;
  font-size: 15px;
  border-radius: 5px;
  position: relative;
  cursor: default;

  &:hover {
    overflow: visible;
    width: fit-content;
    z-index: 3000;
  }
  transition: width 0.5s ease-out;
}

.event_badge__success {
  background-color: $bg_color_success;
  color: $text_color_success;
}
.event_badge__warning {
  background-color: $bg_color_warning;
  color: $text_color_warning;
}
.event_badge__danger {
  background-color: $bg_color_danger;
  color: $text_color_danger;
}
</style>
