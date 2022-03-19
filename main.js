let helpFunc=require("./commands/help");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path= inputArr[1];
let orgFun=require("./commands/organize");
let tree =require("./commands/tree");

switch (command){
    case "tree":
        // call tree function
        tree.tree(path);
        break;
    case "organize":
        //call organize function
        orgFun.organize(path);
        break;
    case "help":
        // call help function
        helpFunc.help();
        break;
    default:
        console.log("Command not recognised");
}
