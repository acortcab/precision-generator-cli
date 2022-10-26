#! /usr/bin/env node
myVar= process.argv[2];
ask = require("./ask.js");
const chalk = require('chalk');
const figlet = require('figlet');

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

if(!process.argv[2]) {
    ask.askEverything();
}else {   
    var command = process.argv[2]; 
    
    switch (command){
        case 'boot':
            ask.askQuestionProject('boot');
            break;
        case 'web':
            ask.askQuestionProject('web');
            break;            
        case 'micros-application':
            ask.askQuestionProject('micros-application');
            break;
        case 'micros-infrastructure':
            ask.askQuestionProject('micros-infrastructure');
            break;
        case 'web-module':
            ask.askQuestionModuleName('web-module');
            break;    
        case 'common-module':
            ask.askQuestionModuleName('common-module');
            break; 
        case 'core-module':
            ask.askQuestionModuleName('core-module');
            break; 
        case 'module':
            ask.askQuestionModule();
            break; 
        case 'feature':
            ask.executeFeature();
            break;                                                                                          
        default:
            console.log('Not valid action !!!');
    }

}