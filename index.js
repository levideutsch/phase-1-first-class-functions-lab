const returnFirstTwoDrivers = function(one) {
//   console.log(one)
//   console.log(one.slice(0, 2))
  return one.slice(0, 2)
  }

const returnLastTwoDrivers = function(two) {
    // console.log(two)
    // console.log(two.slice(2))
    return two.slice(2)
    
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



function createFareMultiplier(integer) {
    return function multipilier(fare) {
       return fare * integer
    }
    } 

  const fareDoubler = createFareMultiplier(2) 
  const fareTripler = createFareMultiplier(3)
    
function selectDifferentDrivers(a, b) {
    if (b === returnFirstTwoDrivers) {
    return a.slice(0, 2)
}  else if (b === returnLastTwoDrivers){
   return a.slice(2)
}

}