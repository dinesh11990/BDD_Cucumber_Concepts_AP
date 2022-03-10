package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OpenGoogleDefinitions {

	WebDriver driver;

	@Given("^user is entering google\\.com$")
	public void user_is_entering_google_com() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.google.com");
		Thread.sleep(5000);

	}

	@When("^user is typing the search term \"([^\"]*)\"$")
	//you can change the string variable as searchTerm if you want
	public void user_is_typing_the_search_term(String arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("q")).sendKeys(arg1);

	}

	@When("^enters the return key$")
	public void enters_the_return_key() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("q")).sendKeys(Keys.RETURN);

	}

	@Then("^the user should see the search results$")
	public void the_user_should_see_the_search_results() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		boolean status = driver.findElement(By.partialLinkText("dine")).isDisplayed();
		if(status) {
			System.out.println("Results Displayed");
		}

	}


}
