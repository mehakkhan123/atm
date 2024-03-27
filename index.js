#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //balance
let myPin = 1234; //atm pin
// enter your pin
let pin = await inquirer.prompt([
    { name: "pin", message: "Enter your pin:", type: "number" },
]);
if (pin.pin === myPin) {
    console.log("Correct pin number!");
    //   choose your operation
    let operation = await inquirer.prompt([
        {
            name: "operation",
            message: "Choose your operation:",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    if (operation.operation === "Withdraw") {
        // enter your amount
        let amount = await inquirer.prompt([
            { name: "amount", message: "Enter your amount:", type: "number" },
        ]);
        myBalance -= amount.amount;
        if (amount.amount > myBalance) {
            console.log(`Insufficient Balance = ${myBalance}`);
        }
        else {
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operation.operation === "Fast Cash") {
        // choose your amount
        let cash = await inquirer.prompt([
            {
                name: "cash",
                message: "Choose your amount:",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= cash.cash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operation.operation === "Check Balance") {
        console.log(`Your Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number!");
}
