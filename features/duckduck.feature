Feature: Searching for logo on duckduckgo

  I want to find logo on duckduckgo
  Scenario: AC1
    Given I am on the homepage
    When I look at the page
    Then I expect to see the duckduckgo logo on the page

  Scenario: AC2
    Given I am on the homepage
    When I type "super" into the search box
    Then I expect to see exactly 10 suggestions in the typeahead dropdown

  Scenario:AC3
    Given I am on the homepage
    When I type "supercalafragalistic" into the search box
   
  Scenario:AC4
    Given I am on the homepage
    When I click on the hamburger menu in the top right
    Then I expect to see a themes link
  Scenario: AC5
    Given I am on the homepage
    When I click on the hamburger menu in the top right
    When I click on the themes link then click on the dark mode theme button
    Then My page background should change colour
  Scenario: AC6
    Given I am on the homepage
    When I go to the homepage and type "Back to the future BMX Bandits Rocky IV Short Circuit The Terminator Ferris Bueller's day off"
    Then click the magnifying glass
    Then I should get 10 results on the results page
     
  Scenario: AC7
    Given I am on the traffic page
    When I click on the 2018 Traffic section
    Then I should see all the months listed in the order from Dec to Jan
    And the Total Direct Queries should be equal to the sum of all the total directs from each month    


    
