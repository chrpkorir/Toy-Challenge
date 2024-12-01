/*
Write a program whose major task is to calculate an 
individual’s Net Salary by getting the inputs of basic 
salary and benefits. Calculate the payee (i.e. Tax),
 NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
 */
 const prompt = require("prompt-sync")();
function findNetSalary(){
    const basicSalary = parseFloat(prompt("Enter your basic salary in Ksh.")); // parseFloat convert string to Numbers
    const benefits = parseFloat(prompt("Enter yout benefits in Ksh."));

    if (basicSalary <= 0 || benefits < 0){
        alert("Enter valid values for your basic salary and benefits ")
    }
    let payee = 0
    let nhif = 0
    

    // to calculate Gross Salary
    const grossSalary = basicSalary + benefits

    // Calculate PAYEE deduction
    const payeeCalculator = (grossSalary) => {    
        if (grossSalary <= 24000){
            payee = grossSalary * 0.10 // 10% rate for salary upto 24, 000
        }
        else if (grossSalary > 24000 && grossSalary <= 32333){
            payee = grossSalary * 0.25 // 25 % rate for salary 24,001 - 32,333
        }
        else if (grossSalary >= 32334 && grossSalary <= 500000){
            payee = grossSalary * 0.30 // 30% rate for salary 32,334 - 500,000
        }
        else if (grossSalary >= 500001 && grossSalary <= 800000){
            payee = grossSalary * 0.325 // 32.5% for salary 500,001 - 800,000
        }
        else{
            payee = grossSalary * 0.35 // 35% for salary Above 800,000
        }

        return payee
    }    

    // Calculate NHIF deduction
    const nhifCalculator = (grossSalary) => {    
        if (grossSalary <= 5999){
            nhif = 150
        }
        else if (grossSalary >= 6000 && grossSalary <= 7999){
            nhif = 300
        }
        else if (grossSalary >= 8000 && grossSalary <= 11999){
            nhif = 400
        }
        else if (grossSalary >= 12000 && grossSalary<= 14999){
            nhif = 500
        }
        else if (grossSalary >= 15000 && 19999){
            nhif = 600
        }
        else if(grossSalary >= 20000 && grossSalary<= 24999){
            nhif = 750
        }
        else if (grossSalary>= 25000 && 29999){
            nhif = 850
        }
        else if(grossSalary >= 30000 && grossSalary <= 34999){
            nhif = 900
        }
        else if (grossSalary >= 35000 && grossSalary <= 39999){
            nhif = 950
        }
        else if (grossSalary >= 40000 && grossSalary <= 44999){
            nhif = 1000
        }
        else if (grossSalary >= 45000 && grossSalary <= 49999){
            nhif = 1100
        }
        else if (grossSalary >= 50000 && grossSalary <= 59999){
            nhif = 1200
        }
        else if (grossSalary >= 60000 && grossSalary <= 69999){
            nhif = 1300
        }
        else if (grossSalary>= 70000 && grossSalary <= 79999){
            nhif = 1400
        }
        else if (grossSalary>= 80000 && grossSalary <= 89999){
            nhif = 1500
        }
        else if (grossSalary>= 90000 && grossSalary <= 99999){
            nhif = 1600
        }else {
            nhif = 1700
        }

        return nhif
    }    

    // Calculate NSSF deduction
    const nssfCalculator = (grossSalary) => {
        return grossSalary * 0.06 // 6% of Gross salary
    }

    const tax = payeeCalculator(basicSalary)// to get PAYEE
    const NHIF = nhifCalculator(basicSalary)
    const NSSF = nssfCalculator(basicSalary)
    const netSalary = grossSalary - tax - NHIF - NSSF



    // Output the salary summary
    console.log("Your Salary")
    console.log(`Gross Pay : Kes${grossSalary.toFixed(2)} `) //toFixed gives 2 decimal paces
    console.log(`Benefits : Kes${benefits.toFixed(2)} `)
    console.log(`PAYEE : Kes${payee.toFixed(2)} `)
    console.log(`Net Pay : Kes${netSalary.toFixed(2)} `)

}

findNetSalary()