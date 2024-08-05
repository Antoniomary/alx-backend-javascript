export default function createIteratorObject(report) {
  const employeesList = [];

  for (const department in report.allEmployees) {
    if (department) {
      employeesList.push(...report.allEmployees[department]);
    }
  }

  return employeesList;
}
