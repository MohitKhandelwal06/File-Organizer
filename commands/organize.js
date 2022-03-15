const { Console } = require("console");
const fs=require("fs");
const path=require("path");


let types ={
    media:[
        "mp4","mkv","mp3"
    ],
    archives:[
        'zip','7z','rar','tar','gz','ar','iso','xz'
    ],
    documents:[
        'docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tes'
    ],
    app:[
        'exe','dmg','pkg','deb'
    ],
    images:[
        'png','jpg','jpeg'
        ],
    code:['js','html','css','cpp','c','java']
}


function organize(srcPath){
    // 1. to check is source path is present
    if(srcPath==undefined){
        //the process.cwd() method returns the current working directory of the Node js process.
        srcPath=process.cwd();
    }
    // 2. to create a directory -> organized files
    let organizedFiles=path.join(srcPath,"organized_files");
    // console.log("organized files folder is", organizedFiles);
    if(!fs.existsSync(organizedFiles)){
        fs.mkdirSync(organizedFiles);
    }else{
        console.log("folder already exists");
    }

    // 3. scan the entire srcPath
    // Reads the contents of the directory.
    // Basically reads the names of files present in directory
    let allFiles=fs.readdirSync(srcPath);

    // console.log(allFiles);
    // 4. Traverse over all the files and classify them on the basis of their extensions
    for(let i=0;i<allFiles.length;i++){

        let fullPathOfFile=path.join(srcPath,allFiles[i]);
        // console.log(fullPathOfFile);

        let isFile=fs.lstatSync(fullPathOfFile).isFile();
        if(isFile){

            // 1. get extension name
            let ext=allFiles[i].split('.')[1];
            //  or we can use let ext=path.extname(allFiles[i]);
            // console.log(ext);
            
            // 1.2 get folder name from extension
            let folderName= getFolderName(ext);
            console.log(folderName);
            // 1.3 copy from src to destination 
            copyFileToDest(srcPath,fullPathOfFile,folderName);

        }
    }
}

function getFolderName(ext){
    for(key in types){
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key;
            }
        }
        // console.log(key);
    }
}

function copyFileToDest(srcPath, fullPathOfFile,folderName){
// create folder path of destination 
let destFolderPath=path.join(srcPath,"organized_files",folderName);
// make folder to keep file 
// check folder if it exists otherwise make folder 
if(!fs.existsSync(destFolderPath)){
    fs.mkdirSync(destFolderPath);
}

// copy file from source folder to destination folder
let fileName=path.basename(fullPathOfFile);
let destFileName=path.join(destFolderPath,fileName);
fs.copyFileSync(fullPathOfFile,destFileName);

}
organize();