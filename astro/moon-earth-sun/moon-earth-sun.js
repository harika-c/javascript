const yr2023Jan = {
  1: "waxing-gibbous-3",
  2: "waxing-gibbous-4",
  3: "waxing-gibbous-5",
  4: "waxing-gibbous-6",
  5: "waxing-gibbous-7",
  6: "full-moon",
  7: "wanning-gibbous-1",
  8: "wanning-gibbous-2",
  9: "wanning-gibbous-3",
  10: "wanning-gibbous-4",
  11: "wanning-gibbous-5",
  12: "wanning-gibbous-6",
  13: "wanning-gibbous-7",
  14: "wanning-gibbous-8",
  15: "third-quarter",
  16: "wanning-crescent-1",
  17: "wanning-crescent-2",
  18: "wanning-crescent-3",
  19: "wanning-crescent-4",
  20: "wanning-crescent-5",
  21: "new-moon",
  22: "waxing-crescent-1",
  23: "waxing-crescent-2",
  24: "waxing-crescent-3",
  25: "waxing-crescent-4",
  26: "waxing-crescent-5",
  27: "waxing-crescent-6",
  28: "waxing-crescent-7",
  29: "first-quarter",
  30: "waxing-gibbous-1",
  31: "waxing-gibbous-2",
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

function createObjectImage(id, img) {
  let objectId = document.getElementById(id);
  let src = objectId.getAttribute("src");
  if (src) {
    objectId.removeAttribute("src");
  }
  objectId = document.getElementById(id);
  src = objectId.getAttribute("src");
  if (!src) {
    objectId.setAttribute("src", img);
  }
}

function direction(accurateAngle, id) {
  const objectId = document.getElementById(id);
  objectId.style.transform = `rotate(${accurateAngle}deg)`;
}

function earthAngle(selectedDate = new Date()) {
  const newDate = new Date(selectedDate);
  const month = newDate.getMonth();
  const monthNo = Number(month);
  const date = newDate.getDate();
  const dateNo = Number(date);
  const year = newDate.getFullYear();
  const yearNo = Number(year);

  const countDaysInMonth = calculateDaysFromMonthsInReverse(
    MONTH_NON_LEAP_YEAR,
    month + 1
  ); // 1 day = 1 degree so leap year or non leap not a big different in calculating angle , because is a change in 1 degree not much .
  const backwardDays = calculateDaysFromBackward(dateNo, monthNo, yearNo);
  console.log("countDaysInMonth", countDaysInMonth, backwardDays);
  const angle = countDaysInMonth + backwardDays; // 365 days = 360 degrees angle , adjust the 5 days in 12 months .
  const accurateAngle = Math.ceil(angle + (5 / 12) * (12 - monthNo)); // 5days / 12 months * ( 12-current month) . Since we are calculatng the months , days from backwards its 12- current month
  console.log("accurateAngle", accurateAngle);

  direction(accurateAngle, "solar-system");
}

function moonAngle(approxPhase) {
  const moonAng = approxPhase * 12; // 360 degrees /31 phases is 12 degree each phase of moon;
  const accurateAngle = moonAng - 72; // 72 is full moon angle
  const antiClockWiseAngle = 360 - accurateAngle;
  console.log("moonAng", moonAng, accurateAngle, antiClockWiseAngle);
  direction(antiClockWiseAngle, "earth-moon");
  direction(accurateAngle, "moon");
}

function dateChange(event) {
  console.log("evemt", datesArr[day]);
  let selectedDate;
  if (typeof event !== "string") {
    selectedDate = event.target.value;
  } else {
    // const date = new Date();
    // const todayDate = `${date.getFullYear()}-${
    //   date.getMonth() + 1
    // }-${date.getDate()}`;
    selectedDate = event;
  }
  console.log("val", selectedDate);
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
    totalDays = countDaysInYear + countDaysInMonth + dateNo;
    phase = eachPhase(totalDays);
    approxPhase = Math.ceil(phase);
    createObjectImage("moon-img", moonPhasesImages[approxPhase]);
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
    phase = eachPhase(totalDays);
    approxPhase = Math.ceil(phase);
    createObjectImage("moon-img", moonPhasesImages[31 - approxPhase]); //INFO: 31 is the number of phases
  }

  earthAngle(newDate);
  moonAngle(approxPhase);
}

const datesArr = [
  "06-07-2023",
  "06-10-2023",
  "06-13-2023",
  "06-15-2023",
  "06-18-2023",
  "06-21-2023",
  "06-24-2023",
  "06-27-2023",
  "06-30-2023",
  "07-20-2023",
  "08-25-2023",
  "09-29-2023",
  "10-30-2023",
  "11-04-2023",
  "12-09-2023",
  "01-13-2024",
  "02-16-2024",
  "03-19-2025",
  "04-21-2025",
  "05-24-2025",
];
i = 0;
day = 0;

function demoSEMAngles() {
  setTimeout(() => {
    console.log(datesArr[day]);
    dateChange(datesArr[day]);
    i++;
    if (i < 20) demoSEMAngles();
    day++;
    if (day > 20) day = 0;
  }, 700);
}

demoSEMAngles();
// dateChange();
