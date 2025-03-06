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