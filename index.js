// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDriver = map(drivers, function(driver) {
    return Object.assign({}, driver, { driver.toLowerCase() });
  });
}
