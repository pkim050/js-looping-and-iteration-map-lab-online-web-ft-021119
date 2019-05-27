// Code your solution in this file.
function map(array, callback) {
  const newArr = [];
  for (const element of array) {
    newArr.push(callback(element));
  }
  return newArr;
}

function lowerCaseDrivers(drivers) {
  const newDriver = map(drivers, function(driver) {
    return driver = driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  const newDriver = [];
  for (const driver of drivers) {
    let temp = driver.split(" ");
    let firstName = temp[0];
    let lastName = temp[1];
    newDriver.push({"firstName": firstName, "lastName": lastName});
  }
  return newDriver;
}

function attributesToPhrase(drivers) {
  const newDriver = [];
  for (const driver of drivers) {
    let name = driver["name"];
    let hometown = driver["hometown"];
    let result = name + " is from " + hometown;
    newDriver.push(result);
  }
  return newDriver;
}
