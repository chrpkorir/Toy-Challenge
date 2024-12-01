/* A program that takes the speed of a car as input 
e.g 80. If the speed is less than 70, it should print “Ok”.
 Otherwise, for every 5 km/s above the speed limit (70), 
 it should give the driver one demerit point and print the 
 total number of demerit points.
 */

 function detectSpeed(speed){
    const demeritPointsPerKm = 5
    // if spees less that 70 print "Ok"
    if (speed < 70){ 
        console.log("Ok")
    }
    else {
        const points = Math.floor((speed - 70)/ demeritPointsPerKm) // Get the demerit points
        // if demerit points greater that 12, prints "License suspended"
        if(points > 12){
            console.log("License suspended")
        }
        else{
            // Output the demerit points
    console.log(`points : ${points}`)
        }
    }

 }
 detectSpeed(80)
 
