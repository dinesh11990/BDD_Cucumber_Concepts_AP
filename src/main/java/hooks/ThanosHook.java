package hooks;

import cucumber.api.java.Before;
import cucumber.api.java.after;

public class ThanosHook {
	//Acending order
	@Before(order=1)
	public void beforeSnapping() {
		
		System.out.println("Thanos collecting the infinity stones");;

	}

	//Decending order
	@After(order=1)
	public void afterSnapping() {
		
		System.out.println("After killing everyone");
	}
	//Acending order
	@Before(order=0)
	public void beforetoBeforScenario() {
		
		System.out.println("Thanos has to be born");;

	}
	//Decending order
	@After(order=0)
	public void aftertAfterScenario() {
		
		System.out.println("Finally Thanos is also dying");
	}
}
