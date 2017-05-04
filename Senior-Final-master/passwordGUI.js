const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = true;
        if(exports.checkLength(str)
        && exports.containsUpper(str)
        && exports.containsLower(str)
        && exports.containsNumerical(str)
        && exports.containsSpecial(str)){
            passesAllChecks = true;
        }
        else{
            passesAllChecks=false;
        }
        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
