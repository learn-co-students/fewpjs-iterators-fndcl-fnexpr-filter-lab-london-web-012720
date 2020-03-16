// Code your solution here



const findMatching = (drivers, name) => {
    return drivers.filter( driver =>
      driver.toLowerCase() === name.toLowerCase()
    
    )
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filter( driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, name) {
    return drivers.filter( driver => driver.name === name)
  }