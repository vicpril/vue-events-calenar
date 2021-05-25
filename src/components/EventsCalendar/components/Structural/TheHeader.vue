<template lang="">
  <div class="calendar__header">
    <BaseLinkButton @click="selectPrevMonth">&lt;</BaseLinkButton>
    <div class="selected_month__wrapper">
      <span>{{ monthName }}</span>
      <span v-show="!isCurrentYear">&nbsp;{{ monthYear }}</span>
    </div>
    <BaseLinkButton @click="selectNextMonth">&gt;</BaseLinkButton>
  </div>
</template>
<script>
import BaseLinkButton from "./../UI/BaseLinkButton";
import { useSelectedMonth } from "../../hooks/selectedMonth";
import { computed } from "vue";

export default {
  components: {
    BaseLinkButton,
  },

  setup() {
    const { monthName, monthYear, selectNextMonth, selectPrevMonth } =
      useSelectedMonth();

    const isCurrentYear = computed(() => {
      return monthYear.value === new Date().getFullYear();
    });

    return {
      monthName,
      monthYear,
      isCurrentYear,
      selectNextMonth,
      selectPrevMonth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
.calendar__header {
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
  color: $text_color_navigate;
  font-weight: bold;
  font-size: 1.5rem;
}
.button_action {
  font-family: "Caudex";
}
</style>
