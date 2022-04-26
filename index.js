// Code your solution in this file!
console.log("hello")
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () =>{
    const firstDriver = drivers[0]
    const secondDriver = drivers[1]

    return [firstDriver, secondDriver]
}

const returnLastTwoDrivers = () =>{
    const thirdDriver = drivers[2]
    const secondDriver = drivers[3]
    
    return [thirdDriver, secondDriver]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers[0]

function createFareMultiplier(fare){
    return function(multiply){
        return fare * multiply
    }
}


const fareDoubler = createFareMultiplier(2)

// function fareDoubler(){
//     createFareMultiplier()
// }

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, returnDrivers){ 
    return returnDrivers(arrayOfDrivers)
}
