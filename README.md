# Survey Fun


1. [Learning Objectives](#learning-objectives)
1. [Summary](#summary)
1. [Releases](#releases)
1. [Helpful Resources](#helpful-resources)

## Learning Objectives
* Read, update and understand pre-written test code
* Modify a web app to use AJAX without breaking tests
* Validate forms on the client using JavaScript
* Create dynamic form elements using templates.

## Summary 
This is a fully tested survey.  Your job is to make it client friendly. 


## Releases
Everyone does Release 1 (take at least 30 minutes).  Then choose 1 or more of the Release 2 options.  If you complete one Release 2, you can do another Release 2 or move on to Release 3. 

### Release 1
Understand the tests. Use `rake spec` to run all the tests or `rspec spec_file_name` to run a single test file. Do not run the jasmine tests yet (they are just default jasmine init files and will break!!)

* Be able to explain each line of testing and how it works and how you would modify it.
* Know what code the tests are testing.
* Break the tests / code to deepen your understanding
* Are there tests that are missing?

### Release 2a. 
* AJAX-ify it - refactor the existing code to work with AJAX. Make sure your tests still pass
* Implement Update and Delete (with AJAX)
* Use TDD to drive out the Update and Delete code, or add test after.

### Release 2b
* Write client side validation for your form inputs using JavaScript.
* Use Jasmine to write some test around this code. Be sure to delete the default Jasmine tests (Player.js and SpecHelper.js) and write your own. Maintain the test file structure)

### Release 2c
* Add Dynamic Form elements.
* Use a template.
* Explore template libraries (like Mustache.js)
* Use Jasmine to write some test around this code. 

### Release 3
* Make it beautiful with CSS



## Helpful Resources
* [attr_accessor](http://guides.rubyonrails.org/v3.2.13/security.html#mass-assignment)
1. [Rendering json in Sinatra](http://apidock.com/rails/ActionDispatch/Request/xhr%3F)
1. [UnderscoreJS Template](http://underscorejs.org/#template)
1. [MustacheJS](https://github.com/janl/mustache.js#mustachejs---logic-less-mustache-templates-with-javascript)
1. [Testing Javascript Apps with Capybara](https://github.com/jnicklas/capybara#selecting-the-driver)
1. [Capybara and Selenium](https://github.com/jnicklas/capybara#selenium)
1. [Jasmine](https://github.com/pivotal/jasmine)
1. [Jasmine with jQuery](https://github.com/velesin/jasmine-jquery)

