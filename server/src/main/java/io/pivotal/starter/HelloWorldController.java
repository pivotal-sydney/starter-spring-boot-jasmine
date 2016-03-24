package io.pivotal.starter;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @RequestMapping("/hello")
    public String sayHello() {
        System.out.println("HelloWorldController.sayHello");
        return "Hello World!";
    }

}
