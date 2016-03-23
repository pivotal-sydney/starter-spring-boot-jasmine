package io.pivotal.meetupbot;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MainApplication.class)
public class MainApplicationTests {

	@Before
	public void before() {
	}

	@Test
	public void shouldDoSomething() {
		assertTrue(true);
	}

}
