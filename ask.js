#! /usr/bin/env node
const path = require('path');
const fileSettings = 'C:\\\maven\\apache-maven-3.8.6\\conf\\settings.xml';
const mvn = require('maven').create({'settings':fileSettings});
var define ={};
const pluginMaven = 'archetype:generate';
var counter;
var initial = false;

this.inialize=function (activeDebug){
    define['archetypeGroupId'] = 'precisionsoftware';
    define['archetypeVersion'] = '0.0.1-SNAPSHOT';
    define['artifactId'] = 'te';
    define['version'] = '1.0-SNAPSHOT';
    define['interactiveMode'] = 'false';
    if(activeDebug != null && (activeDebug == '-d' || activeDebug == '--debug')){
        define['interactiveMode'] = 'true';
    }
    counter = 1;
    initial = true;
}

this.askEverything=function (activeDebug){
    ask.inialize(activeDebug);

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
          message: 'Which package you want to locate the class?',
          default: 'com.qad.gtte.te',
        },
	    {
          name: 'className',
          message: 'How will you class be named?',
          default: 'testClass',
        },
		    {
          name: 'classObject',
          message: 'How will you Object be named?',
          default: 'testObject',
        },
	    {
          name: 'classId',
          message: 'How will you class ID be named?',
          default :'testId',
        },
      ])
      .then(answers => {
	        define['archetypeArtifactId'] = 'precision-generator-repository';
            define['groupId'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            define['classObject'] = answers.classObject;
            define['classId'] = answers.classId;
            mvn.execute(pluginMaven, define);
      });
}

this.askQuestionsEntity=function (activeDebug){
  if(!initial){
     ask.inialize(activeDebug);
  }

  const inquirer = require('inquirer');
  define['archetypeArtifactId'] = 'precision-generator-entity';

    inquirer
      .prompt([
        {
          name: 'packageInPathFormat',
          message: 'Which package you want to locate the class?',
          default: 'com.qad.gtte',
        },
	    {
          name: 'className',
          message: 'How will you class be named?',
          default: 'testClass',
        },
		{
          name: 'tableName',
          message: 'How will you table mapped?',
          default: 'testTable',
        }
      ])
      .then(answers => {
            define['groupId'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            define['tableName'] = answers.tableName;
            ask.askQuestionsColumns();
      });
}

this.askQuestionsColumns=function (){
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
                mvn.execute(pluginMaven, define);
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
          message: 'Which package you want to locate the class?',
          default: 'com.qad.gtte.te',
        },
	    {
          name: 'className',
          message: 'How will you class be named?',
          default: 'testClass',
        }
      ])
      .then(answers => {
            define['archetypeArtifactId'] = 'precision-generator-form';
            define['groupId'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            ask.askQuestionsFormsField();
      });
}

this.askQuestionsFormsField=function (){
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
                mvn.execute(pluginMaven, define);
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
          message: 'Which package you want to locate the class?',
          default: 'com.qad.gtte.te',
        },
	    {
          name: 'className',
          message: 'How will you class be named?',
          default: 'testClass',
        },
		    {
          name: 'contraintName',
          message: 'Which constraint will you use?',
          default: 'testConstraint',
        },
	    {
          name: 'formName',
          message: 'Which form will you use?',
          default :'testForm',
        },
      ])
      .then(answers => {
            define['archetypeArtifactId'] = 'precision-generator-validator';
            define['groupId'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            define['contraintName'] = answers.contraintName;
            define['formName'] = answers.formName;
            mvn.execute(pluginMaven, define);
      });
}



this.executeFeature=function (){
    mvn.execute([pluginMaven +':feature']);
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