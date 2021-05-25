import { computed, ref } from "vue";
import { getFullWeeksStartAndEndInMonth } from "../utils/getWeeksInMonth";

const selectedMonth = ref(getCurrentMonth());

export function useSelectedMonth() {
  const month = computed(() => selectedMonth.value);

  const monthName = computed(() =>
    selectedMonth.value
      .toLocaleString("ru-RU", {
        month: "long",
      })
      .toUpperCase()
  );
  const monthYear = computed(() => selectedMonth.value.getFullYear());

  const weeksOfMonth = computed(() =>
    getFullWeeksStartAndEndInMonth(
      month.value.getMonth(),
      month.value.getFullYear()
    )
  );

  function selectNextMonth() {
    const newMonth = new Date(
      selectedMonth.value.setMonth(selectedMonth.value.getMonth() + 1)
    );
    selectedMonth.value = newMonth;
  }

  function selectPrevMonth() {
    const newMonth = new Date(
      selectedMonth.value.setMonth(selectedMonth.value.getMonth() - 1)
    );
    selectedMonth.value = newMonth;
  }

  return {
    month,
    monthName,
    monthYear,
    weeksOfMonth,
    selectNextMonth,
    selectPrevMonth,
  };
}

function getCurrentMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  return new Date(year, month, 1, 0, 0, 0);
}
