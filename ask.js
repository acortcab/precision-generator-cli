#! /usr/bin/env node
const path = require('path');
const fs = require('fs-extra')
const fileSettings = 'C:\\\Users\\ev8\\.m2\\settings.xml';
const mvn = require('maven').create({'settings':fileSettings});
var define ={};
const pluginMaven = 'archetype:generate';
var counter;
var initial = false;
// directory to check if exists
const dirOld = './te'
const dirGenerated = './generated'
var runAll = false;
var dirMove = "C:\\Workspace\\workspace-microservices\\qad-gtte-webui-te";

this.inialize=function (activeDebug){
    define['archetypeGroupId'] = 'precisionsoftware';
    define['archetypeVersion'] = '0.0.1-SNAPSHOT';
    define['artifactId'] = 'te';
    define['version'] = '1.0-SNAPSHOT';
    define['interactiveMode'] = 'false';
    if(activeDebug != null && activeDebug == '--all'){
        runAll = true;
        define['archetypeArtifactId'] = 'precision-generator-all';
    }
    if(activeDebug != null && (activeDebug == '-d' || activeDebug == '--debug')){
        define['interactiveMode'] = 'true';
    }
    counter = 1;
    initial = true;
}

this.askEverything=function (activeDebug){
    ask.inialize(activeDebug);
	
	if(activeDebug == null || activeDebug != '--all'){
		const inquirer = require('inquirer');
		option = null;
		inquirer
		  .prompt([
			{
				type: 'list',
				name: 'action',
				message: 'What would like to create?',
				choices: ['repository', 'entity', 'form', 'validator'],
			}
		  ])
		  .then(answers => {
			
			switch (answers.action){
				case 'repository':
					ask.askQuestionsRepository(activeDebug);
					return;
				case 'entity':
					ask.askQuestionsEntity(activeDebug);
					return;
				case 'form':
					ask.askQuestionsForm(activeDebug);
					return;
				case 'validator':
					ask.askQuestionsValidator(activeDebug);
					return;
			}
			
		  });
	}else{
		ask.askQuestionsRepository(activeDebug);
	}
}

this.askQuestionsRepository=function (activeDebug){
    if(!initial){
        ask.inialize(activeDebug);
    }

    const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          name: 'packageInPathFormat',
          message: 'Which package you want to locate the repository?',
          default: 'com.qad.gtte.te',
        },
	    {
          name: 'repositoryName',
          message: 'How will your repository be named?',
          default: 'testRepository',
        },
		{
          name: 'classObject',
          message: 'Which domain will you use?',
          default: 'testDomain',
        },
	    {
          name: 'classId',
          message: 'Which domain ID will you use?',
          default :'testId',
        },
      ])
      .then(answers => {
            if(!runAll)
	            define['archetypeArtifactId'] = 'precision-generator-repository';
            define['groupId'] = answers.packageInPathFormat;
            define['repositoryName'] = answers.repositoryName;
            define['classObject'] = answers.classObject;
            define['classId'] = answers.classId;
            if(!runAll){
                mvn.execute(pluginMaven, define).then(() => {
                    ask.moveContent();
                 });
            }else{
                ask.askQuestionsEntity(activeDebug);
            }
      });
}

this.askQuestionsEntity=function (activeDebug){
  if(!initial){
     ask.inialize(activeDebug);
  }

  const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          name: 'packageInPathFormat',
          message: 'Which package you want to locate the entity?',
          default: 'com.qad.gtte.te',
		  when: runAll == false,
        },
	    {
          name: 'entityName',
          message: 'How will you entity be named?',
          default: 'testDomain',
        },
		{
          name: 'tableName',
          message: 'Which table will you map?',
          default: 'testTable',
        }
      ])
      .then(answers => {
            if(!runAll){
                define['archetypeArtifactId'] = 'precision-generator-entity';
                define['groupId'] = answers.packageInPathFormat;
            }
            define['entityName'] = answers.entityName;
            define['tableName'] = answers.tableName;
            ask.askQuestionsColumns(activeDebug);
      });
}

this.askQuestionsColumns=function (activeDebug){
    const inquirer = require('inquirer');

    inquirer
      .prompt([
	    {
          name: 'columnName',
          message: 'Which column will you map?',
          default :'testColumn',
        },
        {
          type: 'list',
          name: 'typeColumn',
          message: 'Which type column will you map?',
          choices: ['String', 'Boolean', 'Integer', 'Long'],
        },
        {
          name: 'variableName',
          message: 'How will you call the column variable?',
          default :'testVariable',
        },
         {
          type: 'confirm',
          name: 'confirmation',
          message: 'Would you like to add a new column to map?',
          default: false
      }
      ])
      .then(answers => {
            define['columnName' + counter] = answers.columnName;
            define['typeColumn' + counter] = answers.typeColumn;
            define['variableName' + counter] = answers.variableName;
            if(answers.confirmation == true ){
                counter++;
                ask.askQuestionsColumns();
            }else{
                if(!runAll){
                    mvn.execute(pluginMaven, define).then(() => {
                        ask.moveContent();
                    });
                }else{
                    ask.askQuestionsForm(activeDebug);
                }
            }
      });
}

this.askQuestionsForm=function (activeDebug){
    if(!initial){
      ask.inialize(activeDebug);
    }

    const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          name: 'packageInPathFormat',
          message: 'Which package you want to locate the form?',
          default: 'com.precisionsoftware.dem.controller.incident',
		  when: runAll == false,
        },
	    {
          name: 'formName',
          message: 'How will your form be named?',
          default: 'testForm',
        }
      ])
      .then(answers => {
            if(!runAll){
                define['archetypeArtifactId'] = 'precision-generator-form';
                define['groupId'] = answers.packageInPathFormat;
            }
            define['formName'] = answers.formName;
            ask.askQuestionsFormsField();
      });
}

this.askQuestionsFormsField=function (activeDebug){
    const inquirer = require('inquirer');

    inquirer
      .prompt([
	    {
          name: 'fieldName',
          message: 'How will you called your field?',
          default :'testField',
        },
        {
          type: 'list',
          name: 'typeField',
          message: 'Which type field will you choose?',
          choices: ['String', 'Boolean', 'Integer', 'Long'],
        },
         {
          type: 'confirm',
          name: 'confirmation',
          message: 'Would you like to add a new column to map?',
          default: false
      }
      ])
      .then(answers => {
            define['fieldName' + counter] = answers.fieldName;
            define['typeField' + counter] = answers.typeField;
            if(answers.confirmation == true ){
                counter++;
                ask.askQuestionsFormsField();
            }else{
                if(!runAll){
                    mvn.execute(pluginMaven, define).then(() => {
                        ask.moveContent();
                    });
                }else{
                    ask.askQuestionsValidator(activeDebug);
                }
            }
      });
}

this.askQuestionsValidator=function (activeDebug){
    if(!initial){
       ask.inialize(activeDebug);
    }

    const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          name: 'packageInPathFormat',
          message: 'Which package you want to locate your validator?',
          default: 'com.qad.gtte.te.controller',
		  when: runAll == false,
        },
	    {
          name: 'validatorName',
          message: 'How will you validator be named?',
          default: 'testValidator',
        },
		    {
          name: 'contraintName',
          message: 'Which constraint will you use?',
          default: 'testConstraint',
        },
	    {
          name: 'validateFieldName',
          message: 'Which class do you want to validate?',
          default :'testValidateField',
        },
      ])
      .then(answers => {
            if(!runAll){
                define['archetypeArtifactId'] = 'precision-generator-validator';
                define['groupId'] = answers.packageInPathFormat;
            }
            define['validatorName'] = answers.validatorName;
            define['contraintName'] = answers.contraintName;
            define['validateFieldName'] = answers.validateFieldName;
            mvn.execute(pluginMaven, define).then(() => {
                ask.moveContent();
            });
      });
}



this.moveContent=function (){
    // check if directory exists
    if (fs.existsSync(dirOld)) {
        fs.removeSync(dirOld + '/pom.xml')
        fs.renameSync(dirOld , dirGenerated); 
    }

    const inquirer = require('inquirer');

      inquirer
        .prompt([
          {
              type: 'confirm',
              name: 'confirmation',
              message: 'Would you like to copy the folder?',
              default: false
          },
          {
          name: 'dirToMove',
          message: 'Where do you want to move?',
          default: dirMove,
		  when: (answers) => answers.confirmation,
          },
        ])
        .then(answers => {

          if(answers.confirmation){
              // copy source folder to destination
                fs.copy(dirGenerated, answers.dirToMove, function (err) {
                    if (err){
                        console.log('An error occured while copying the folder.')
                        return console.error(err)
                    }
                    console.log('Copy completed!')
                });
          }else{
             return;
          }
        });

}

this.askMore=function (){
  const inquirer = require('inquirer');

  inquirer
    .prompt([
      {
          type: 'confirm',
          name: 'confirmation',
          message: 'Would you like to create anything else?',
          default: false
      }
    ])
    .then(answers => {

      if(answers.confirmation){
          ask.askEverything();
        }else{
          return;
        }
    });
}