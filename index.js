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
      figlet.textSync('|PRECISION GENERATOR CLI |', { horizontalLayout: 'full' })
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

if(!process.argv[2]) {
    ask.askEverything();
}else {   
    var command = process.argv[2]; 
    
    switch (command){
        case 'repository':
            ask.askQuestionsRepository('boot');
            break;
        case 'domain':
            ask.askQuestionsDomain('web');
            break;            
        case 'form':
            ask.askQuestionsForm('micros-application');
            break;
        case 'validator':
            ask.askQuestionsValidator('micros-infrastructure');
            break;                                                                                         
        default:
            console.log('Not valid action !!!');
    }

}