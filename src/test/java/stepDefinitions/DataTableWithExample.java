package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class DataTableWithExample {
	
	WebDriver driver;
	
	@Given("^Proceed to login page$")
	public void proceed_to_login_page() throws Throwable {
		
		System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/"); 
	    
	}

	@When("^user enters \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enters_and_password(String userName, String passWord) throws Throwable {
	   
		
		driver.findElement(By.id("txtUsername")).sendKeys("userName");
		driver.findElement(By.id("txtPassword")).sendKeys("passWord");
	}

	@When("^clicked button$")
	public void clicked_button() throws Throwable {
	 
		driver.findElement(By.id("btnLogin")).click();
	}

}
