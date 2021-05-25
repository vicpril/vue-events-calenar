//note: month is 0 based, just like Dates in js
export function getFullWeeksStartAndEndInMonth(month, year) {
  let weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate();

  let start = 1;
  let end;
  let skipFirstWeek = false;
  if (firstDate.getDay() === 1) {
    end = 7;
  } else if (firstDate.getDay() === 0) {
    let preMonthEndDay = new Date(year, month, 0);
    start = preMonthEndDay.getDate() - 6 + 1;
    end = 1;
    weeks.push(fillWeek(start, end, month - 1));
    skipFirstWeek = true;
  } else {
    let preMonthEndDay = new Date(year, month, 0);
    start = preMonthEndDay.getDate() + 1 - firstDate.getDay() + 1;
    end = 7 - firstDate.getDay() + 1;
    weeks.push(fillWeek(start, end, month - 1));
    start = end + 1;
    end = end + 7;
  }
  while (start <= numDays) {
    if (skipFirstWeek) {
      skipFirstWeek = false;
    } else {
      weeks.push(fillWeek(start, end, month));
    }

    start = end + 1;
    end = end + 7;
    end = start === 1 && end === 8 ? 1 : end;
    if (end > numDays && start <= numDays) {
      end = end - numDays;
      weeks.push(fillWeek(start, end, month));

      break;
    }
  }
  return weeks;

  function fillWeek(from, to, startMonth) {
    let indexToDate = () => {};
    if (to - from < 0) {
      const countToFirst = 7 - to;
      const lastInMonth = from + countToFirst - 1;
      indexToDate = (_, i) => {
        if (from + i <= lastInMonth) {
          return new Date(year, startMonth, from + i);
        } else {
          const date = from + i - lastInMonth;
          return new Date(year, startMonth + 1, date);
        }
      };
    } else {
      indexToDate = (_, i) => new Date(year, startMonth, from + i);
    }
    return Array(7).fill().map(indexToDate);
  }
}
