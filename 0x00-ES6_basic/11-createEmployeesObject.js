export default function createEmployeesObject(departmentName, employees) {
  const ret = {
    [departmentName]: [...employees],
  };

  return ret;
}
