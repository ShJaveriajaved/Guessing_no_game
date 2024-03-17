import inquirer from "inquirer";

async function startFunc() {

    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Your Number between 1 - 10:"
        }
    ])
    const {userGuess} = userNum;

    console.log("Your Guess: ", userGuess, "\nSystem's Guess:", systemNum);

    if(userGuess === systemNum){
        console.log("Your Guess is correct \nYou Won!");

    }

else {
    console.log("Better Luck next time!")
}

}

async function startAgain(){
do{
    await startFunc();
    var again = await inquirer.prompt({
        type: "input",
        name: "restart",
        message: "Do you want tocontinue? Press Y or N"
    })
}
while ( again.restart == "Y" || again.restart == "Y" || again.restart == "YES" || again.restart == "Yes" )
}

startAgain();
