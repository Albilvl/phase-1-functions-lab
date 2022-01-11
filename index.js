// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
 return Math.abs(somevalue - 42) 
}

function distanceFromHqInFeet(somevalue){
    return Math.abs(somevalue - 42) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination-start)*264
}

function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start, destination)
    if (dist> 2500){
        return `cannot travel that far`
    } else if( dist > 2000) {
        return  25
    } else if ( dist > 400){
        let newdist = dist - 400
        return newdist * 0.02
    } else {
        return 0
    }
    }
