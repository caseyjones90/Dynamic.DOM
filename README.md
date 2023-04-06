# Dynamic.DOM

# Overview
In this activity, you will be using higher-order functions to generate DOM elements according to dynamic. You will be writing a simple website UI that allows users to add and remove bookmarks.

# Getting Started
1. The Driver should create a repository and add the Navigator as a collaborator.
2. Clone the repository so both partners have local copies.
3. Remember to swap the Driver/Navigator roles.
4. Use Git and Github to version control your code.

# Specs
You are free to write the code how you would like, as long as your final product has the following functionalities:

- The user can see all of their added bookmarks.
- The user can add a bookmark by clicking a button.
- The user can delete a previously added bookmark.

There are three (3) tabs below, one for each phase of the activity. Make sure to complete all three.


# Phase 1: HTML
In your repository, create an index.html. This file should contain the following elements:

- Two text fields: one where the user inputs the link that the bookmark is saving, and one where the user inputs the name of the bookmark.
- A button the user can click on to add the bookmark.
- A list that shows all of the user's added bookmarks.
    - This list should start off empty.


# Phase 2: JS
Create index.js and link to it in your HTML file.

Your code should do the following:

- Maintain an array of objects representing all of the user's added bookmarks.
- Re-render the entire list of bookmarks any time a bookmark is added or removed.
- Use map to map the bookmark array to DOM elements.

Here are some guiding questions:

1. What event listeners do you need to start off with?
2. Can you correctly add bookmarks?
3. What UI element allows a user to remove a previously added bookmark?
4. How can you make sure that the correct bookmark is removed?

# Phase 3: CSS
If you have time left, add CSS to style your Bookmark Manager.