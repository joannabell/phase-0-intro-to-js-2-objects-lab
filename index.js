// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "123 Smith St, Jonestown, IL, 60540",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newnewEmployee = {...employee};
    delete newnewEmployee[key];
    console.log(newnewEmployee);
    return newnewEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

