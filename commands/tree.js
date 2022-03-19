// print name of all files in a given path recursively.
//read dir sync
//if folder
let fs = require("fs");
let path = require("path");


function treeFunc(dirPath){
    if(dirPath==undefined){
        treeHelp(process.cwd(), "");
        return;
    }
    else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist){
            treeHelp(dirPath, "");    
        }
        
        else{
            console.log("Enter Valid Directory");
            return;
        }
    }
}

function treeHelp(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent + "|__" +fileName);
    }

    else{
        let dirName = path.basename(dirPath);
        console.log(indent + "|----" +dirName);
        let children = fs.readdirSync(dirPath);
        for(let i=0; i<children.length; i++){
            childAddress = path.join(dirPath, children[i]);
            treeHelp(childAddress, indent + "\t");
        }
    }
}
// treeFunc("C:\\Users\\Mohit Khandelwal\\Desktop\\FJP-5 Dev\\fileOrganizer");

module.exports = {tree:treeFunc};