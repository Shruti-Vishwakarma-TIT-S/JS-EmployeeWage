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
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_HOURS = 160;
const MAX_WORKING_DAYS = 20;

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
  