#! /usr/bin/env node
myVar= process.argv[2];
ask = require("./ask.js");
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs-extra')
// directory to check if exists
const dir = './te'

console.log(
    chalk.yellow(
      figlet.textSync(' -------', { horizontalLayout: 'full' })
    )
  ); 

console.log(
    chalk.yellow(
      figlet.textSync('|PRECISION CLI |', { horizontalLayout: 'full' })
    )
  );

  console.log(
    chalk.yellow(
      figlet.textSync(' -------', { horizontalLayout: 'full' })
    )
  );   

// check if directory exists
if (fs.existsSync(dir)) {
  fs.removeSync(dir); 
}

if(!process.argv[2] || process.argv[2] == '-d' || process.argv[2] == '--debug') {
    ask.askEverything(process.argv[2]);
}else {   
    var command = process.argv[2]; 
    var activeDebug = process.argv[3]; 
    
    switch (command){
        case 'repository':
            ask.askQuestionsRepository(activeDebug);
            break;
        case 'entity':
            ask.askQuestionsEntity(activeDebug);
            break;            
        case 'form':
            ask.askQuestionsForm(activeDebug);
            break;
        case 'validator':
            ask.askQuestionsValidator(activeDebug);
            break;                                                                                         
        default:
            console.log('Not valid parameter, we only accept repository or entity or form or validator at the moment !!!');
    }

}