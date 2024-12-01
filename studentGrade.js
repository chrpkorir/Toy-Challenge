/* A function that prompts user to input student marks between 
0 and 100 and output grade as  shown below
 A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 */
 const prompt = require("prompt-sync")();


 function studentGradeGenerator(){
    let score = prompt('Enter the students marks between 0 and 100') 

    // Checks the grade based on the input score
    let grade
    if (score < 0 || score > 100)
    {
        console.log('Invalid input, please put a number between 0 and 100')
    }
    else if (score > 79 && score <= 100){
        grade = 'A'
    }
    else if (score > 60 && score <= 79){
        grade = 'B'
    }
    else if (score >= 49 && score <=59){
        grade = 'C'
    }
    else if (score >= 40 && score < 49){
        grade = 'D'
    }
    else{
        grade = 'E'
    }
    // Outputs the Grade
    console.log(` The grade for ${score} is ${grade}`)
 }

 //Invoke the function
 studentGradeGenerator()