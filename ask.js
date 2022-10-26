#! /usr/bin/env node
const path = require('path');
const fileSettings = 'C:\\\maven\\apache-maven-3.8.6\\conf\\settings.xml';
const mvn = require('maven').create({'settings':fileSettings});
var define ={};
const pluginMaven = 'archetype:generate';
var counter;

this.inialize=function (){
    define['archetypeGroupId'] = 'precisionsoftware.maven.archetype';
    define['archetypeVersion'] = '0.0.1-SNAPSHOT';
    define['artifactId'] = 'te';
    define['groupId'] = 'com.qad.gtte';
    define['version'] = '1.0-SNAPSHOT';
    counter = 1;
}

this.askEverything=function (){
    ask.inialize();

    const inquirer = require('inquirer');
    option = null;
    inquirer
      .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would like to do?',
            choices: ['repository', 'domain', 'form', 'validator'],
        }
      ])
      .then(answers => {
        
        switch (answers.action){
            case 'repository':
                ask.askQuestionsRepository();
                return;
            case 'domain':
                ask.askQuestionsDomain();
                return;
            case 'form':
                ask.askQuestionsForm();
                return;
            case 'validator':
                ask.askQuestionsValidator();
                return;
        }
        
      });
}

this.askQuestionsRepository=function (){
    ask.inialize();

    const inquirer = require('inquirer');

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
	        define['archetypeArtifactId'] = 'precision.generator.repository';
            define['packageInPathFormat'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            define['classObject'] = answers.classObject;
            define['classId'] = answers.classId;
            mvn.execute(pluginMaven, define);
      });
}

this.askQuestionsDomain=function (){
  ask.inialize();

  const inquirer = require('inquirer');
  define['archetypeArtifactId'] = 'precision.generator.entity';

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
            define['packageInPathFormat'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            define['tableName'] = answers.tableName;
            ask.askQuestionsColumns();
      });
}

this.askQuestionsColumns=function (project){
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

this.askQuestionsForm=function (project){
    ask.inialize();

    const inquirer = require('inquirer');

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
        }
      ])
      .then(answers => {
            define['archetypeArtifactId'] = 'precision.generator.form';
            define['packageInPathFormat'] = answers.packageInPathFormat;
            define['className'] = answers.className;
            ask.askQuestionsFormsField();
      });
}

this.askQuestionsFormsField=function (project){
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

this.askQuestionsValidator=function (project){
    ask.inialize();

    const inquirer = require('inquirer');

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
            define['archetypeArtifactId'] = 'precision.generator.validator';
            define['packageInPathFormat'] = answers.packageInPathFormat;
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