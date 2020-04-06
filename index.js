// Code your solution here

const findMatching = (drivers, name) => {
    return drivers.filter( driver =>
      driver.toLowerCase() === name.toLowerCase()
    
    )
  }
  
const fuzzyMatch = (drivers, string) => {
    return drivers.filter( driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }
  
const matchName = (drivers, name) => {
    return drivers.filter( driver => driver.name === name)
  }



  