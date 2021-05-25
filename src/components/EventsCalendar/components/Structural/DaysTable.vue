<template lang="">
  <table>
    <DaysTableHeader />
    <tbody>
      <tr v-for="week in weeks" :key="week[0].getTime()">
        <td v-for="item in week" :key="item.getTime()">
          <DaysTableItem :day="item" :currentMonth="month"></DaysTableItem>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import DaysTableHeader from "./DaysTableHeader";
import DaysTableItem from "./DaysTableItem";
import { useSelectedMonth } from "../../hooks/selectedMonth";

export default {
  components: { DaysTableHeader, DaysTableItem },
  setup() {
    const { month, weeksOfMonth: weeks } = useSelectedMonth();

    function getDayofMonth(day) {
      return new Date(this.month.getFullYear(), this.month.getMonth(), +day);
    }

    return { month, weeks, getDayofMonth };
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  table-layout: fixed;
}
</style>
