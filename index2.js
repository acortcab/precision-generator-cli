#! /usr/bin/env node
myVar= process.argv[2];
ask = require("./ask.js")


if(!process.argv[2]) {
    console.log('Insufficient number of arguments! Give two numbers please!');
}else {   
    //console.log('The sum of', process.argv[2], 'and', process.argv[3], 'is', add(process.argv[2], process.argv[3]));
    var command = process.argv[2]; 
    
    switch (command){
        case 'boot':
            console.log(' boot case');
            //const [ , , ...args ] = process.argv;
            //const nameIndex = process.argv.indexOf('--name=');
            //console.log('args = '+ args.indexOf("--name="));
            //console.log('process = '+ process.argv);
            ask.askQuestionProject('boot');
            break;
        case 'web':
            console.log(' web case');
            ask.askQuestionProject('web');
            //mvn.execute(['terasoluna:web']);
            break;            
        case 'micros-application':
            console.log(' micor application case');
            ask.askQuestionProject('micros-application');
            //mvn.execute(['terasoluna:micros-application']);
            break;
        case 'micros-infrastructure':
            console.log(' insçfractruture case');
            ask.askQuestionProject('micros-infrastructure');
            //mvn.execute(['terasoluna:boot']);
            break;
        case 'web-module':
            console.log(' web module case');
            //mvn.execute(['terasoluna:micros-infrastructure']);
            ask.askQuestionModuleName('web-module');
            break;    
        case 'common-module':
            console.log(' commmon case');
            //mvn.execute(['terasoluna:common-module']);
            ask.askQuestionModuleName('common-module');
            break; 
        case 'core-module':
            console.log(' core module case');
            ask.askQuestionModuleName('core-module');
            //mvn.execute(['terasoluna:core-module']);
            break; 
        case 'module':
            console.log(' module case');
            ask.askQuestionModule();
            break; 
        case 'feature':
            console.log(' feature case');
            mvn.execute(['terasoluna:feature']);
            break;                                                                                          
        default:
            console.log('Not valid action !!!');
    }

}

//console.log('hello world ' + myVar);
//mvn.execute(['terasoluna:feature']);
//mvn.execute(['install']);