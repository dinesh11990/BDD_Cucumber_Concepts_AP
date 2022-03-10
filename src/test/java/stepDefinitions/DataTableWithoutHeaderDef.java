package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class DataTableWithoutHeaderDef {

	WebDriver driver;

	@Given("^You are on the login page$")
	public void you_are_on_the_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\New folder\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/"); 
	}

	@When("^You enters the valid credentials$")
	public void you_enters_the_valid_credentials(DataTable dataTable) throws Throwable {
		
		List<String> credentials=dataTable.asList(String.class);
		String userName=credentials.get(0);
		String passWord=credentials.get(1);
		driver.findElement(By.id("txtUsername")).sendKeys("userName");
		driver.findElement(By.id("txtPassword")).sendKeys("passWord");
	}

	@When("^click the login button$")
	public void click_the_login_button() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();
	}


}
