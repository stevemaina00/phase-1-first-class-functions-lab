// Code your solution in this file!
// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=function(drivers=["Antonia", "Nuru", , 'Amari', 'Mo']){
  return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return drivers.slice(-2)
    
  }
  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  const createFareMultiplier = function(f=2){
    return function(multiplier){
        return multiplier * f
    }

  }
  const fareDoubler= createFareMultiplier(2);

  const fareTripler= createFareMultiplier(3);

  const  selectDifferentDrivers=function(arrayOfDrivers=["fish","Taylor","Sean"],  returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
  }
