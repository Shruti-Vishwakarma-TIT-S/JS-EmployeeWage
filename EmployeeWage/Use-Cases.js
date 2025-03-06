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

// Constants for work hours and wage per hour
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

// Generate a random work type (0, 1, or 2)
let workType = Math.floor(Math.random() * 3);

// Calculate the daily wage based on work hours
let workHours = getWorkHours(workType);
let dailyWage = workHours * WAGE_PER_HOUR;

// Log the result
if (workHours === 0) {
  console.log("No work today. Daily wage: $" + dailyWage);
} else {
  console.log("Worked " + workHours + " hours. Daily wage: $" + dailyWage);
}
