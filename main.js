let helpFunc=require("./commands/help");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path= inputArr[1];

switch (command){
    case "tree":
        // call tree function
        console.log("tree function called and executed successfully"+path);
        break;
    case "organize":
        //call organize function
        console.log("organize function called and executed successfully"+path);
        break;
    case "help":
        // call help function
        helpFunc.help();
        break;
    default:
        console.log("Command not recognised");
}