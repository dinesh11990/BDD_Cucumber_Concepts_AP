package hooks;

import cucumber.api.java.Before;
import cucumber.api.java.after;

public class ThanosHook2 {
	
	@Before
	public void beforeScenario() {
		
		System.out.println("This will run before the every scenario");;

	}
	@After
	public void afterScenario() {
		
		System.out.println("This will run after the every scenario");
	}

	@Before("@First,@Second")
	public void beforeFirstAndSecond() {
		
		System.out.println("This will run only before the First and Second Scenario");;

	}
	
	/*@Before("@Second")
	public void beforeSecond() {
		
		System.out.println("This will run only before the Second Scenario");
	}*/
	
	@Before("@Third")
	public void beforeThird() {
		
		System.out.println("This will run only before the Third Scenario");
	}
	@After("@First,@Second")
	public void afterFirstAndSecond() {
		
		System.out.println("This will run only before the First and Second Scenario");;

	}
	
	/*@After("@Second")
	public void afterSecond() {
		
		System.out.println("This will run only before the Second Scenario");
	}*/
	
	@After("@Third")
	public void afterThird() {
		
		System.out.println("This will run only before the Third Scenario");
	}
}
