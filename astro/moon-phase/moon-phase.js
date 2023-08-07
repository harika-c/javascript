const yr2023Jan = {
  1: "first-quarter",
  2: "waxing-gibbous",
  3: "waxing-gibbous",
  4: "waxing-gibbous",
  5: "waxing-gibbous",
  6: "full-moon",
  7: "full-moon",
  8: "full-moon",
  9: "wanning-gibbous",
  10: "wanning-gibbous",
  11: "wanning-gibbous",
  12: "wanning-gibbous",
  13: "third-quarter",
  14: "third-quarter",
  15: "third-quarter",
  16: "third-quarter",
  17: "wanning-crescent",
  18: "wanning-crescent",
  19: "wanning-crescent",
  20: "wanning-crescent",
  21: "new-moon",
  22: "new-moon",
  23: "new-moon",
  24: "waxing-crescent",
  25: "waxing-crescent",
  26: "waxing-crescent",
  27: "waxing-crescent",
  28: "first-quarter",
  29: "first-quarter",
  30: "first-quarter",
};
const moonPhasesImages = {
  1: "https://lunaf.com/img/moon/l-phase-11.png?ezimgfmt=ng:webp/ngcb1",
  2: "https://lunaf.com/img/moon/l-phase-12.png?ezimgfmt=ng:webp/ngcb1",
  3: "https://lunaf.com/img/moon/l-phase-13.png?ezimgfmt=ng:webp/ngcb1",
  4: "https://lunaf.com/img/moon/l-phase-14.png?ezimgfmt=ng:webp/ngcb1",
  5: "https://lunaf.com/img/moon/l-phase-15.png?ezimgfmt=ng:webp/ngcb1",
  6: "https://lunaf.com/img/moon/l-phase-16.png?ezimgfmt=ng:webp/ngcb1",
  7: "https://lunaf.com/img/moon/l-phase-17.png?ezimgfmt=ng:webp/ngcb1",
  8: "https://lunaf.com/img/moon/l-phase-17.png?ezimgfmt=ng:webp/ngcb1",
  9: "https://lunaf.com/img/moon/l-phase-18.png?ezimgfmt=ng:webp/ngcb1",
  10: "https://lunaf.com/img/moon/l-phase-19.png?ezimgfmt=ng:webp/ngcb1",
  11: "https://lunaf.com/img/moon/l-phase-20.png?ezimgfmt=ng:webp/ngcb1",
  12: "https://lunaf.com/img/moon/l-phase-21.png?ezimgfmt=ng:webp/ngcb1",
  13: "https://lunaf.com/img/moon/l-phase-22.png?ezimgfmt=ng:webp/ngcb1",
  14: "https://lunaf.com/img/moon/l-phase-23.png?ezimgfmt=ng:webp/ngcb1",
  15: "https://lunaf.com/img/moon/l-phase-24.png?ezimgfmt=ng:webp/ngcb1",
  16: "https://lunaf.com/img/moon/l-phase-25.png?ezimgfmt=ng:webp/ngcb1",
  17: "https://lunaf.com/img/moon/l-phase-26.png?ezimgfmt=ng:webp/ngcb1",
  18: "https://lunaf.com/img/moon/l-phase-27.png?ezimgfmt=ng:webp/ngcb1",
  19: "https://lunaf.com/img/moon/l-phase-28.png?ezimgfmt=ng:webp/ngcb1",
  20: "https://lunaf.com/img/moon/l-phase-29.png?ezimgfmt=ng:webp/ngcb1",
  21: "https://lunaf.com/img/moon/l-phase-0.png?ezimgfmt=ng:webp/ngcb1",
  22: "https://lunaf.com/img/moon/l-phase-1.png?ezimgfmt=ngcb1/notWebP",
  23: "https://lunaf.com/img/moon/l-phase-2.png?ezimgfmt=ngcb1/notWebP",
  24: "https://lunaf.com/img/moon/l-phase-3.png?ezimgfmt=ngcb1/notWebP",
  25: "https://lunaf.com/img/moon/l-phase-4.png?ezimgfmt=ngcb1/notWebP",
  26: "https://lunaf.com/img/moon/l-phase-5.png?ezimgfmt=ngcb1/notWebP",
  27: "https://lunaf.com/img/moon/l-phase-6.png?ezimgfmt=ng:webp/ngcb1",
  28: "https://lunaf.com/img/moon/l-phase-7.png?ezimgfmt=ng:webp/ngcb1",
  29: "https://lunaf.com/img/moon/l-phase-8.png?ezimgfmt=ng:webp/ngcb1",
  30: "https://lunaf.com/img/moon/l-phase-9.png?ezimgfmt=ng:webp/ngcb1",
  31: "https://lunaf.com/img/moon/l-phase-10.png?ezimgfmt=ng:webp/ngcb1",
};

const MONTH_NON_LEAP_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const YR_2023 = 2023;

function calcDaysFromPastYears(yearNo) {
  const countBtwYr = 2022 - yearNo;
  let nextYear = yearNo + 1;
  let calcDaysInYr = 0;

  for (let i = 0; i < countBtwYr; i++) {
    const checkLeap = checkLeapYear(nextYear);
    calcDaysInYr = calcDaysInYr + checkLeap;
    nextYear = nextYear + 1;
  }
  return calcDaysInYr;
}

function calcDaysFromFutureYears(yearNo) {
  const count = yearNo - 2023;
  let prevYear = yearNo - 1;
  let calcDaysInYr = 0;
  for (let i = 0; i < count; i++) {
    const checkLeap = checkLeapYear(prevYear);
    calcDaysInYr = calcDaysInYr + checkLeap;
    prevYear = prevYear - 1;
  }
  return calcDaysInYr;
}

function checkLeapYear(year) {
  if (year % 400 === 0) return 366;
  if (year % 4 === 0 && !(year % 100 === 0)) {
    return 366;
  }
  return 365;
}

function eachPhase(totalDays) {
  if (totalDays % 29.531 === 0) {
    return 1;
  } else if (totalDays >= 29.531) {
    return totalDays % 29.531;
  } else {
    return totalDays;
  }
}

function calculateDaysFromMonthsInReverse(yearArray, monthNo) {
  let sum = 0;
  // INFO: monthNo are  0 - 11
  for (let i = 11; monthNo <= i; i--) {
    sum = sum + yearArray[i];
  }
  return sum;
}

function calculateDaysFromMonthsInForward(yearArray, monthNo) {
  return yearArray.reduce((val, acc, index) => {
    if (index <= monthNo) {
      return val + acc;
    }
    return val;
  });
}
function calculateDaysFromBackward(dateNo, monthNo, yearNo) {
  const checkLeap = checkLeapYear(yearNo);
  if (checkLeap === 365) {
    return MONTH_NON_LEAP_YEAR[monthNo] - dateNo; // monthNo starts from 0 index
  }
  return MONTH_LEAP_YEAR[monthNo] - dateNo;
}

function createImage(moonImg) {
  let moonId = document.getElementById("moon-img");
  let src = moonId.getAttribute("src");
  console.log("ismoon there", src);
  if (src) {
    moonId.removeAttribute("src");
  }
  moonId = document.getElementById("moon-img");
  src = moonId.getAttribute("src");
  if (!src) {
    moonId.setAttribute("src", moonImg);
  }
}

function dateChange(event) {
  console.log("val", event.target.value);
  const selectedDate = event.target.value;
  const newDate = new Date(selectedDate);
  const month = newDate.getMonth(); //INFO:  Jan starts from 0
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const yearNo = Number(year);
  const monthNo = Number(month);
  const dateNo = Number(date);
  let approxPhase;
  let phase;
  let totalDays = 0;
  let countDaysInMonth = 0;

  console.log("dateNo monthNo yearNo", dateNo, monthNo, yearNo);
  if (yearNo >= 2023) {
    const countDaysInYear = calcDaysFromFutureYears(yearNo);
    // console.log("month ", month);
    if (month !== 0) {
      const checkLeap = checkLeapYear(yearNo);
      if (checkLeap === 365)
        countDaysInMonth = calculateDaysFromMonthsInForward(
          MONTH_NON_LEAP_YEAR,
          monthNo - 1
        );
      else
        countDaysInMonth = calculateDaysFromMonthsInForward(
          MONTH_LEAP_YEAR,
          monthNo - 1
        );
    }
    // console.log("countDaysInYear ", countDaysInYear, countDaysInMonth, dateNo);
    totalDays = countDaysInYear + countDaysInMonth + dateNo;
    phase = eachPhase(totalDays);
    approxPhase = Math.ceil(phase);
    // console.log("approx", approxPhase, phase);
    createImage(moonPhasesImages[approxPhase]);
  } else {
    const countDaysInYear = calcDaysFromPastYears(yearNo);
    if (month !== 12) {
      const checkLeap = checkLeapYear(yearNo);
      if (checkLeap === 365)
        countDaysInMonth = calculateDaysFromMonthsInReverse(
          MONTH_NON_LEAP_YEAR,
          monthNo + 1
        );
      else
        countDaysInMonth = calculateDaysFromMonthsInReverse(
          MONTH_LEAP_YEAR,
          monthNo + 1
        );
    }
    const date = calculateDaysFromBackward(dateNo, monthNo, yearNo);
    totalDays = countDaysInYear + countDaysInMonth + date;
    // console.log("monthNo", monthNo);
    console.log("total days", countDaysInYear, countDaysInMonth, date);
    phase = eachPhase(totalDays);
    approxPhase = Math.ceil(phase);
    console.log("approx", approxPhase, phase);
    createImage(moonPhasesImages[31 - approxPhase]); //INFO: 31 is the number of phases
  }
}
