package io.pivotal.starter;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;

public class HelloWorldControllerTest {

    private HelloWorldController helloWorldController;

    @Before
    public void setUp() throws Exception {
        helloWorldController = new HelloWorldController();
    }

    @Test
    public void shouldSayHello() throws Exception {
        assertThat(helloWorldController.sayHello()).isEqualTo("Hello World!");
    }
}