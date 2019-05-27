// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDriver = drivers.map(driver => driver.toLowerCase());
  return newDriver;
}

function nameToAttributes(drivers) {
  const newDriver = drivers.map(driver => Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}));
  return newDriver;
}

function attributesToPhrase(drivers) {
  const newDriver = drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
  return newDriver;
}
