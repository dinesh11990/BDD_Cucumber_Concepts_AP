Feature: open google.com feature
Scenario: open google website and search
 Given user is entering google.com
 When user is typing the search term "Dinesh" 
 And enters the return key
 Then the user should see the search results 