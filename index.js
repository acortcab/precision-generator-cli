#! /usr/bin/env node
myVar= process.argv[2];
ask = require("./ask.js");
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs-extra')
// directory to check if exists
const dir = './generated'

console.log(
    chalk.yellow(
      figlet.textSync(' --------', { horizontalLayout: 'full' })
    )
  ); 

console.log(
    chalk.yellow(
      figlet.textSync('|GTTE CLI |', { horizontalLayout: 'full' })
    )
  );

  console.log(
    chalk.yellow(
      figlet.textSync(' --------', { horizontalLayout: 'full' })
    )
  );   

// check if directory exists
if (fs.existsSync(dir)) {
  fs.removeSync(dir); 
}

if(!process.argv[2] && process.argv[2] == '-h' || process.argv[2] == '--help'){
    console.log(chalk.green.bold('Usage:'))
    console.log(chalk.green.bold('ge: to run the cli'))
    console.log(chalk.green.bold('ge <repository,entity,form>: to run the option you want directly'))
    console.log(chalk.green.bold('ge --all: to run all at the same time'))
    console.log(chalk.green.bold('ge --debug: to interact with maven archetype'))
return;
}

if(!process.argv[2] || process.argv[2] == '-d' || process.argv[2] == '--debug' || process.argv[2] == '--all') {
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