# tsf-cli-node


## Prerequisites

You will need to have install :
* **NPM** ( [npm-install] )
* **Java** ( [java-install] )

## Installation
Using npm
```shell
$ npm i -g adf-cli
```

## Quick Start

You can easily start to use ADF CLI by typing something like this:

```shell
$ adf
```

It will appear a menu with some actions in order to start to scaffold your project. If you keep reading you will learn about the different choices.


## New Project

From ADF CLI we let you create the followings type of projects:
* **Spring Boot**
* **Web Application**
* **Microservice infrastructure**
* **Microservice application**

Run the following command for creating a spring boot project:
```shell
$ adf boot
```
Run the following command for creating a web application project:
```shell
$ adf web
```
Run the following command for creating a microservice infrastructure project:
```shell
$ adf micros-infrastructure
```
Run the following command for creating a microservice application project:
```shell
$ adf micros-application
```
The CLI application will ask the following questions:
* **Project Name**( by default : new-application) - The name of the application.
* **Group Id**( by default : com.mycompany) - This will be used as the base package of the application.
* **Terasoluna Version** - The version of TSF+ you want to use( each version has different features available, see more information in [TSF+]).
* **Version** ( by default : 1.0.0-SNAPSHOT) - Version of your project.
* **App. shorth ID**( by default : application) - The application name will be used as the artifactId for the top-level POM.

## New Module

From ADF CLI we let you create the followings type of modules:
* Web nature: The web nature denotes a web boundary defined as MVC controllers, REST API, web services, etc
* Common nature: The common nature serves for the purpose of creating lightweight business module interfaces. This interfaces can be shared between business modules, projects or even to 3rd parties. This nature can also be used to create utility projects.
* Core nature:  A core project will have, out-of-the-box, an already set up extensible Spring context over the principle of convention over configuration. A core project can start using some usual features, such as logging or environment-aware property management, out-of-the-box. In essence, a core project only has to care about adding its own beans.

Run the following command for creating a new module:
```shell
$ adf module
```
Run the following command for creating a web module:
```shell
$ adf web-module
```
Run the following command for creating a common module:
```shell
$ adf common-module
```
Run the following command for creating a core module:
```shell
$ adf core-module
```

At the end in each command ,the CLI application will ask you the name of the module(By default: "module").

## Add Feature


if you want to check the features included in each versions you can go:

* [2.0.0.RELEASE]
* [1.5.0.RELEASE]
* [1.4.0.RELEASE]
* [1.3.0.RELEASE]
* [1.2.0.RELEASE]
* [1.1.0.RELEASE]
* [1.0.0.RELEASE]

   [npm-url]: https://www.npmjs.com/package/adf-plugin
   [npm-install]: https://www.npmjs.com/get-npm
   [java-install]: https://www.java.com/en/download/
   [TSF+]: https://terasoluna.everis.com/docs/current/TSFplus%20Reference%20Documentation.html#_changelog
   [2.0.0.RELEASE]: https://terasoluna.everis.com/dev/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.5.0.RELEASE]: https://terasoluna.everis.com/docs/1.5.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.4.0.RELEASE]: https://terasoluna.everis.com/docs/1.4.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.3.0.RELEASE]: https://terasoluna.everis.com/docs/1.3.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.2.0.RELEASE]: https://terasoluna.everis.com/docs/1.2.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.1.0.RELEASE]: https://terasoluna.everis.com/docs/1.1.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries
   [1.0.0.RELEASE]: https://terasoluna.everis.com/docs/1.0.0.RELEASE/TSFplus%20Reference%20Documentation.html#_3rd_party_frameworks_and_libraries   "# precision-generator-cli" 
