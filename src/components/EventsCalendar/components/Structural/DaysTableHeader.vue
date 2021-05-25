<template lang="">
  <thead>
    <tr>
      <th v-for="(day, index) in dayNames" :key="index">
        {{ day.toUpperCase() }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  data() {
    return {
      dayNames: [
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
        "воскресенье",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables";
th {
  text-align: right;
  padding: 17px 0;
  font-size: 0.8rem;
}
th:nth-child(6),
th:nth-child(7) {
  color: $text_color_disabled;
}
</style>
