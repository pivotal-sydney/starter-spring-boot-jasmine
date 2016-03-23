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
On the top level, we use gradle, which builds (compiles, run tests) both components. We utilise Gradle plugin for Gulp to be able to integrate acceptance tests into a single build tool chain.

### Server

If you want to test/build only the `server`, just `cd` to that folder and run one of the available gradle tasks.

### Acceptance

To build and run `acceptance` part, make sure you have node version 4+ installed.
From the `acceptance` folder run:
```
npm install
```

You can either use gradle (which uses plugin for Gulp) or Gulp directly to build and run the tests. The gulp task for running the tests is `spec`, which is also a default gulp task. That means, to execute the tests, you just need to run:
```
gulp
```
