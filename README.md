# starter-spring-boot-jasmine
Starter project for Spring Boot backend applications which require integration with some web frontend and therefore need UI acceptance testing. 

The web UI acceptance testing setup has been inspired and is based on [React Starter](https://github.com/pivotal-cf/react-starter)

## Tool chain
* Gradle for building
* Java 8, Spring Boot - for the server implementation
* Junit, Mockito, AssertJ - for unit testing of the server
* Gulp for building and running UI acceptance tests
* Jasmine, Webdriver.io, Selenium Standalone - for UI acceptance testing

## Project structure

The project consists of two main components, the server (Spring Boot/Java application) in the `server` folder and the acceptance tests in the `acceptance` folder.
On the top level, we use gradle, which builds (compiles, run tests) both components. We utilise [Gradle plugin for Gulp](https://github.com/srs/gradle-gulp-plugin) to be able to integrate acceptance tests into a single build tool chain.

### Server

You can run gradle build tasks specific to the server (e.g. bootRun) from the top level folder, or from the `server` folder.

### Acceptance

Same as for the server, the gradle tesks specific to the acceptance component can be run from the top level folder as well as `acceptance` subfolder.

The only task displayed by gradle (`gradle tasks`) is `gulp_build`, and that binds to the `default` gulp task, which in turn runs `spec` task which  runs all the acceptance tests. By convention, the gradle pluging for gulp allows you to run any other gulp task from direcly from gradle, buy adding the `gulp_` prefix to the gulp task name. For example there three commands will run acceptance tests:

```
gradle gulp_build
gradle gulp_spec
gradle gulp_default
```

The build will also make sure that gulp and npm packages are installed.

However, if you prefer to run gulp directly from the `acceptance` folder, please make sure you have gulp and node version 4+ installed. The from the `acceptance` folder run:
```
npm install
```

To run the tests, just execute:
```
gulp
```
