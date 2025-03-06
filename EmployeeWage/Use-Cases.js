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
const WORKING_DAYS_IN_MONTH = 20

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

// Variable to store total monthly wage
let totalMonthlyWage = 0;

// UC4 - Refactor to find wages of minimum 20 working days
// Loop through each working day
for (let day = 1; day <= WORKING_DAYS_IN_MONTH; day++) {
  // Generate a random work type (0, 1, or 2) for each day
  let workType = Math.floor(Math.random() * 3);

  // Get the work hours for the day
  let workHours = getWorkHours(workType);

  // Calculate daily wage and add it to the total monthly wage
  let dailyWage = workHours * WAGE_PER_HOUR;
  totalMonthlyWage += dailyWage;

  // Log daily details (optional)
  console.log(
    `Day ${day}: Worked ${workHours} hours. Daily wage: $${dailyWage}`
  );
}

// Log the total wage for the month
console.log("Total monthly wage: $" + totalMonthlyWage);
