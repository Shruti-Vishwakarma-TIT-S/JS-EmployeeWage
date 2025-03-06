// UC1 to check presence or absence of employee
// Constant values representing employee status
const PRESENT = 1;
const ABSENT = 0;

// Variable to store the random employee status
let employeeStatus;

// Generate a random number (0 or 1) to determine presence or absence
employeeStatus = Math.floor(Math.random() * 2);

// Check and print the employee status
if (employeeStatus === PRESENT) {
  console.log("Employee is Present");
} else if (employeeStatus === ABSENT) {
  console.log("Employee is Absent");
}

// UC3 - Refactor code to get working hours
// Constants for work hours and wage per hour
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;
// UC9 Arrow Functions
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4
// Function to determine work hours based on work type
function getWorkHours(workType) {
  switch (workType) {
    case 0: // No Time
      return 0;
    case 1: // Part Time
      return PART_TIME_HOURS;
    case 2: // Full Time
      return FULL_TIME_HOURS;
    default:
      console.log("Invalid work type");
      return 0;
  }
}

// UC5 - Calculate wages till 160 hours and 20 days
// Variables to track total working hours, days, and wages
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let totalWages = 0;
let dailyWageArray = []; 
let dayWiseWageMap = new Map(); 

// While loop to calculate wages till conditions are met
while (totalWorkingHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
  // Increment the day count
  totalWorkingDays++;

  // Generate a random work type (0, 1, or 2)
  let workType = Math.floor(Math.random() * 3);

  // Get the work hours for the day
  let dailyHours = getWorkHours(workType);

  // Add the daily hours to total working hours
  totalWorkingHours += dailyHours;

  // Calculate the daily wage
  let dailyWage = dailyHours * WAGE_PER_HOUR;

  // Add the daily wage to total wages
  totalWages += dailyWage;

  // UC6 Store the daily wage in the array
  dailyWageArray.push({
    day: totalWorkingDays,
    dailyWage: dailyWage,
  });

  // UC7 - Store the daily wage in a map
  dayWiseWageMap.set(totalWorkingDays, dailyWage);

  // Log daily details (optional)
  console.log(
    `Day ${totalWorkingDays}: Worked ${dailyHours} hours. Daily wage: $${dailyWage}. Total hours: ${totalWorkingHours}`
  );
}

// Log final details
console.log(`Total Working Days: ${totalWorkingDays}`);
console.log(`Total Working Hours: ${totalWorkingHours}`);
console.log(`Total Monthly Wages: $${totalWages}`);

// UC6 Log the Daily Wage Array
console.log("Daily Wage Details:", dailyWageArray);

// UC7 Use Array Helper Functions
// Array to store daily wages (sample structure for explanation)
dailyWageArray = [
    { day: 1, dailyWage: 80 },
    { day: 2, dailyWage: 160 },
    { day: 3, dailyWage: 40 },
    { day: 4, dailyWage: 160 },
    { day: 5, dailyWage: 0 },
  ];
  

// Log final details
console.log(`Total Working Days: ${totalWorkingDays}`);
console.log(`Total Working Hours: ${totalWorkingHours}`);
console.log(`Total Monthly Wages: $${totalWages}`);
console.log("Daily Wage Array Details:", dailyWageArray);
console.log("Day-Wise Wage Map:", dayWiseWageMap);

  // a. Calculate total wage using reduce method
  let totalWage = dailyWageArray.reduce((total, record) => total + record.dailyWage, 0);
  console.log("Total Wage:", totalWage);
  
  // b. Show the Day along with Daily Wage using Array map helper function
  let dayWageMap = dailyWageArray.map(record => `Day ${record.day}: $${record.dailyWage}`);
  console.log("Day and Wages:", dayWageMap);
  
  // c. Show Days when Full Time wage of 160 were earned using filter function
  let fullTimeDays = dailyWageArray.filter(record => record.dailyWage === 160).map(record => `Day ${record.day}`);
  console.log("Days with Full-Time Wage:", fullTimeDays);
  
  // d. Find the first occurrence when Full Time Wage was earned using find function
  let firstFullTime = dailyWageArray.find(record => record.dailyWage === 160);
  console.log("First Full-Time Wage Occurrence:", firstFullTime ? `Day ${firstFullTime.day}` : "Not Found");
  
  // e. Check if Every Element of Full Time Wage is truly holding Full Time wage
  let isAllFullTime = dailyWageArray.every(record => record.dailyWage === 160);
  console.log("All are Full-Time Wages:", isAllFullTime);
  
  // f. Check if there is any Part Time Wage
  let hasPartTime = dailyWageArray.some(record => record.dailyWage === 80);
  console.log("Has Part-Time Wage:", hasPartTime);
  
  // g. Find the number of days the Employee Worked
  let workedDays = dailyWageArray.filter(record => record.dailyWage > 0).length;
  console.log("Number of Days Worked:", workedDays);

// UC8 Use Map to calculate total wage
let totalWageFromMap = 0;
dayWiseWageMap.forEach(wage => {
  totalWageFromMap += wage;
});
console.log("Total Wage (Using Map):", totalWageFromMap);

// UC9 Arrow Function
// Daily Wage Map and Daily Hour Map
let dailyWageMap = new Map([
  [1, 160],
  [2, 80],
  [3, 0],
  [4, 160],
  [5, 40],
]);

let dailyHourMap = new Map([
  [1, 8],
  [2, 4],
  [3, 0],
  [4, 8],
  [5, 2],
]);

// a. Calculate total wage and total hours worked using arrow functions
totalWage = [...dailyWageMap.values()].reduce((total, wage) => total + wage, 0);
let totalHours = [...dailyHourMap.values()].reduce((total, hours) => total + hours, 0);

console.log("Total Wage:", totalWage);
console.log("Total Hours Worked:", totalHours);

// b. Show full working days, part working days, and no working days using arrow functions
let fullWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === FULL_TIME_HOURS).map(([day]) => day);
let partWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === PART_TIME_HOURS).map(([day]) => day);
let noWorkingDays = [...dailyHourMap.entries()].filter(([day, hours]) => hours === 0).map(([day]) => day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);

// UC10 Ability to store data in a single object
let fullTimeWages = dailyWageArray
  .filter((record) => record.dailyWage === 160)
  .map((record) => record.dailyWage);

let averageFullTimeWage =
  fullTimeWages.reduce((sum, wage) => sum + wage, 0) / fullTimeWages.length;

console.log("Average Full-Time Wage:", averageFullTimeWage);
  