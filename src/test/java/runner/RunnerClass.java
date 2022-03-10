package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="featureFiles/Login.feature", glue="stepDefinitions")
public class RunnerClass {
	
	//it should combine the feature file and the step definition
	//Runner define

}
