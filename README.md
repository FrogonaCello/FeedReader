# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where I came in.

# Content of the Page

The Page shows News Feeds out of 4 sections: "Udacity Blog", "CSS Tricks", "HTML 5 Rocks", "Linear Digressions". All of these can be clicked through the slide menu, which is visible only, when needed and otherwise hidden.

# How to run the Code

You run the code by cloning or copying the repository and then opening index.html with a browser, you like.

# Test Suites

The **first test suite** ensures, that the 4 sections are loaded and that all of the sections respectively contain a name and a url. 

The **second test suite** makes sure, that the menu is hidden by default and only visible, when someone clicks on the icon.

The **third test suite** ensures that when the loadfeed function is run, at least one entry has been loaded into the div section of the page with the class "feed".

The **fourth test suite** makes sure that when two feeds are loaded, that they don´t have the exact same content.


# Contributing

Contributing goes to the starter code, the videos belonging to the Nanodegreee Program and [Lloan Alas](https://udenver.zoom.us/recording/play/-1Agy4wDME0_ab_zaNUiWquZOWdb4qQvCJENURKWT4CDtHWqXrE0yI7DSi8kfvm5?continueMode=true) for his help with the last tricky test.
